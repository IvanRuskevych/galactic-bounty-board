import {Typography} from "@mui/material";
import {FC} from "react";
import {Link} from "react-router-dom";

interface AuthHintProps {
    text: string;
    linkText: string;
    linkTo: string;
}

export const AuthHint: FC<AuthHintProps> = ({text, linkText, linkTo, ...sxProps}) => {
    return (
        <Typography sx={{mt: 2, ...sxProps}}>
            {text}{" "}
            <Link to={linkTo}>
                {linkText}
            </Link>
        </Typography>
    );
};
