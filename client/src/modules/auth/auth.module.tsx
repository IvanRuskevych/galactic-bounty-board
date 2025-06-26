import type { FC } from "react";
import { AuthForm } from "../../shared/components";
import type { AuthFormProps } from "../../shared/components/AuthForm/types.ts";

export const Auth: FC<AuthFormProps> = ({mode}) => {
  return (
    <AuthForm mode={mode}/>
  );
};