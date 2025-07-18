import type { FC } from "react";
import { AuthForm } from "~/shared/components";
import { AuthFormProps } from "~/typings";

export const Auth: FC<AuthFormProps> = ({ mode }) => {
	return <AuthForm mode={mode} />;
};
