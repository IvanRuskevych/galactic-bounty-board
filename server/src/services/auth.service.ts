import { Context } from "../context";
import {
  ApiErrors,
  chackValidPassword,
  clearAuthCookies,
  ensureUserDoesNotExist,
  ensureUserExists,
  generateAccessToken,
  generateTokens,
  hashPassword,
  normalizeEmail,
  setAccessTokenCookies,
  setAuthCookies,
  validateInput,
  verifyRefreshToken,
} from "../utils";
import { AuthSchema } from "../validations";
import { userService } from "./user.service";

export interface AuthArgsType {
  email: string,
  password: string
}

export const authService = {
  register: async (args: AuthArgsType, ctx: Context) => {
    const {email, password} = validateInput(AuthSchema, args);
    const normalizedEmail = normalizeEmail(email);
    
    await ensureUserDoesNotExist(normalizedEmail, ctx);
    const hashedPassword = await hashPassword(password);
    const user = await userService.create(normalizedEmail, hashedPassword, ctx);
    
    const {accessToken, refreshToken} = generateTokens(user.id);
    setAuthCookies(accessToken, refreshToken, ctx);
    
    return {user};
  },
  
  login: async (args: AuthArgsType, ctx: Context) => {
    const {email, password} = validateInput(AuthSchema, args);
    const normalizedEmail = normalizeEmail(email);
    
    const user = await ensureUserExists(normalizedEmail, ctx);
    await chackValidPassword(password, user.password);
    
    const {accessToken, refreshToken} = generateTokens(user.id);
    setAuthCookies(accessToken, refreshToken, ctx);
    
    return {user};
  },
  
  logout: async (ctx: Context) => {
    clearAuthCookies(ctx);
    return {success: true};
  },
  
  refreshAccessToken: async (ctx: Context) => {
    const refreshToken = ctx.req.cookies.refreshToken;
    if (!refreshToken) {
      throw ApiErrors.Unauthorized("No refresh token");
    }
    
    const payload = verifyRefreshToken(refreshToken);
    const newAccessToken = generateAccessToken(payload.id);
    
    setAccessTokenCookies(newAccessToken, ctx);
    
    return {success: true};
  },
};