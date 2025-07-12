import { ENV_KEYS } from "~/shared/const";

export function validateEnv() {
	const requiredVars = Object.keys(ENV_KEYS);
	const missingVars = requiredVars.filter((key) => !process.env[key]);

	if (missingVars.length > 0) {
		console.error("🚨 Missing required variables: ", missingVars.join(", "));
		process.exit(1);
	}
}
