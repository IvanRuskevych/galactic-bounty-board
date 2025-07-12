import { ZodSchema } from "zod";
import { ApiErrors } from "./ApiErrors";

export function validateInput<T>(schema: ZodSchema<T>, data: unknown): T {
	const result = schema.safeParse(data);

	if (!result.success) {
		const formatedErrors = result.error.flatten().fieldErrors;
		throw ApiErrors.BadRequest(formatedErrors as Record<string, string[]>);
	}

	return result.data;
}
