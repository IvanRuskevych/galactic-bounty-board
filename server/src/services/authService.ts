import {Context} from "../context";
import {userService} from "../services/userService";
import {passwordUtils, tokenUtils} from "../utils";

export interface AuthType {
    email: string,
    password: string
}

export const authService = {
    register: async (ctx: Context, args: AuthType) => {
        const {email, password} = args;

        const hashedPassword = await passwordUtils.hashedPassword(password)
        const user = await userService.create(ctx, email, hashedPassword)
        const token = tokenUtils.generateToken(user.id, user.email)
        return {token, user}
    },

    login: async (ctx: Context, args: AuthType) => {
        const {email, password} = args;

        const user = await userService.getByEmail(ctx, email)
        if (!user) throw new Error("No user found")

        const valid = await passwordUtils.comparePassword(password, user.password)
        if (!valid) throw new Error("Invalid password")
        const token = tokenUtils.generateToken(user.id, user.email)
        return {token, user}
    }
}