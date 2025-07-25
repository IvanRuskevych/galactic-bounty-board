import { UserRole } from "@prisma/client";
import { z } from "zod";
import { REGEX } from "~/shared/const";

export const ValidateIdSchema = z.object({
	id: z.string().uuid("Invalid ID format"),
});

export const AuthSchema = z.object({
	email: z.string().email("Invalid email address"),
	password: z
		.string()
		.min(8, "Password must be at least 8 characters")
		.refine((val) => REGEX.UPPERCASE.test(val), { message: "Password must contain at least one uppercase letter" })
		.refine((val) => REGEX.NUMBER.test(val), { message: "Password must contain at least one one digit" })
		.refine((val) => REGEX.SPECIAL_CHAR.test(val), {
			message: "Password must contain at least one special character",
		}),
	role: z.nativeEnum(UserRole).optional().default(UserRole.HUNTER),
});

export type ValidateIdSchemaType = z.infer<typeof ValidateIdSchema>;
export type AuthSchemaType = z.infer<typeof AuthSchema>;
