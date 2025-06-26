import { Context } from "../context";
import { userRepository } from "../repositories";
import { ApiErrors } from "../utils";

export function requireAuth(ctx: Context) {
  if (!ctx.currentUser) throw ApiErrors.Unauthorized("Not authenticated");
}

export function requireRoleAdmin(ctx: Context) {
  if (ctx.currentUser?.role !== "ADMIN") throw ApiErrors.Unauthorized("Not authorized");
}

export function requireOwnership(userId: string, ownerId: string) {
  if (userId !== ownerId) throw ApiErrors.Forbidden("Couldn't perform action. User is not the owner");
}

export function requireNotOwnership(userId: string, ownerId: string) {
  if (userId === ownerId) throw ApiErrors.Forbidden("Couldn't perform action. User is the owner.");
}

export function setAuthCookies(accessToken: string, refreshToken: string, ctx: Context) {
  ctx.res.cookie("accessToken", accessToken, {httpOnly: true, maxAge: 60 * 60 * 1000});
  ctx.res.cookie("refreshToken", refreshToken, {httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000});
}

export function setAccessTokenCookies(accessToken: string, ctx: Context) {
  ctx.res.cookie("accessToken", accessToken, {httpOnly: true, maxAge: 60 * 60 * 1000});
}

export function clearAuthCookies(ctx: Context) {
  ctx.res.clearCookie("accessToken");
  ctx.res.clearCookie("refreshToken");
}

export async function ensureUserDoesNotExist(email: string, ctx: Context) {
  const user = await userRepository.getByEmail(ctx.prisma, email);
  if (user) throw ApiErrors.Conflict("Email already exists");
}

export async function ensureUserExists(email: string, ctx: Context) {
  const user = await userRepository.getByEmail(ctx.prisma, email);
  if (!user) throw ApiErrors.NotFound("No user found.");
  return user;
}


