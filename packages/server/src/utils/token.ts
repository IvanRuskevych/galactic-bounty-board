import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import * as process from "node:process";
import { ApiErrors } from "~/utils/ApiErrors";

dotenv.config();

export interface JwtPayload {
	id: string;
}

const accessSecret: string = process.env.JWT_ACCESS_SECRET!;
const refreshSecret: string = process.env.JWT_REFRESH_SECRET!;

if (!accessSecret) throw ApiErrors.InternalServerError("Missing JWT_ACCESS_SECRET");
if (!refreshSecret) throw ApiErrors.InternalServerError("Missing JWT_REFRESH_SECRET");

export function generateAccessToken(id: string) {
	return jwt.sign({ id }, accessSecret, { expiresIn: "1d" });
}

export function generateRefreshToken(id: string) {
	return jwt.sign({ id }, refreshSecret, { expiresIn: "7d" });
}

export function verifyAccessToken(token: string): JwtPayload {
	return jwt.verify(token, accessSecret) as JwtPayload;
}

export function verifyRefreshToken(token: string): JwtPayload {
	return jwt.verify(token, refreshSecret) as JwtPayload;
}

export function generateTokens(id: string) {
	return {
		accessToken: generateAccessToken(id),
		refreshToken: generateRefreshToken(id),
	};
}
