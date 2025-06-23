import {Button} from "@mui/material";
import type {FC} from "react";

interface AuthButtonProps {
    type: "login" | "logout";
    onClick: () => void;
}

export const AuthButton: FC<AuthButtonProps> = ({type, onClick, ...props}) => {
    return (
        <Button color="inherit" onClick={onClick} {...props}>
            {type === "login" ? "Login" : "Logout"}
        </Button>
    );
};
