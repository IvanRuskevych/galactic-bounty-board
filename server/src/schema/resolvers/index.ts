import bcrypt from 'bcrypt';
import dotenv from "dotenv"
import jwt from 'jsonwebtoken';
import {Context} from "src/context";

dotenv.config()

const JWT_SECRET_SECRET = process.env.JWT_SECRET_SECRET!

export const resolvers = {
    Query: {
        me: async (_parent: unknown, _args: unknown, ctx: Context) => {
            if (!ctx.currentUser) throw new Error("Not authenticated")

            return ctx.prisma.user.findUnique({where: {id: ctx.currentUser.id}})
        },

        allUsers: async (_parent: any, _args: any, ctx: Context) => {
            return ctx.prisma.user.findMany()
        },

        allAvailableBounties: async (_parent: unknown, _args: unknown, ctx: Context) => {
            return ctx.prisma.bounty.findMany({
                where: {
                    acceptedById: {
                        equals: null
                    }
                }
            })
        },
    },

    Mutation: {
        registerUser: async (_parent: unknown, args: { email: string, password: string }, ctx: Context) => {
            const hashedPassword = await bcrypt.hash(args.password, 10)
            const newUser = await ctx.prisma.user.create({
                data: {email: args.email, password: hashedPassword}
            })
            const token = jwt.sign({id: newUser.id, email: newUser.email}, JWT_SECRET_SECRET, {expiresIn: "1h"})

            return token
        },

        loginUser: async (_parent: unknown, args: { email: string, password: string }, ctx: Context) => {
            const user = await ctx.prisma.user.findUnique({
                where: {email: args.email}
            })
            if (!user) throw new Error("No user found")

            const valid = await bcrypt.compare(args.password, user.password)
            if (!valid) throw new Error("Invalid password")

            const token = jwt.sign({id: user.id, email: user.email}, JWT_SECRET_SECRET, {expiresIn: "1h"})
            return token
        },

        createBounty: (_parent: unknown, args: {
            title: string,
            description: string,
            targetName: string,
            planet: string,
            reward: number,
        }, ctx: Context) => {
            if (!ctx.currentUser) throw new Error("Not authenticated") // todo: навіщо перевіряти якщо це вже зроблено у context??

            return ctx.prisma.bounty.create({
                data: {
                    title: args.title,
                    description: args.description,
                    targetName: args.targetName,
                    planet: args.planet,
                    reward: args.reward,
                    createdById: ctx.currentUser.id,
                }
            })
        }
    }
}