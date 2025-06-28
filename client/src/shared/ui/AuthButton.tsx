import { Button } from "@mui/material";
import type { FC } from "react";
import { AuthAction, type AuthActionType } from "../constants";

interface AuthButtonProps {
  mode: AuthActionType;
  onClick: () => void;
}

export const AuthButton: FC<AuthButtonProps> = ({mode, onClick, ...props}) => {
  return (
    <Button color="inherit" onClick={onClick} {...props}>
      {mode === AuthAction.LOGIN ? "Login" : "Logout"}
    </Button>
  );
};
