import {Context} from "../context";
import {userService} from "../services/userService";
import {ApiErrors, normalizeEmail, passwordUtils, tokenUtils} from "../utils";

export interface AuthType {
    email: string,
    password: string
}

export const authService = {
    register: async (ctx: Context, args: AuthType) => {
        const {email, password} = args;
        const normalizedEmail = normalizeEmail(email)

        const user = await userService.getByEmail(ctx, normalizedEmail)

        if (user) {
            return ApiErrors.Conflict("Email already exists!!")
        }

        const hashedPassword = await passwordUtils.hashedPassword(password)

        const newUser = await userService.create(ctx, normalizedEmail, hashedPassword)
        const token = tokenUtils.generateToken(newUser.id, newUser.email)

        return {token, user: newUser}
    },

    login: async (ctx: Context, args: AuthType) => {
        const {email, password} = args;
        const normalizedEmail = normalizeEmail(email)

        const user = await userService.getByEmail(ctx, normalizedEmail)
        if (!user) throw ApiErrors.NotFound("No user found")

        const valid = await passwordUtils.comparePassword(password, user.password)
        if (!valid) throw ApiErrors.Unauthorized("Invalid password")

        const token = tokenUtils.generateToken(user.id, user.email)
        return {token, user}
    }
}