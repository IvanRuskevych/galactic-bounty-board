import {Visibility, VisibilityOff} from "@mui/icons-material";
import {Box, Button, IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import {type FC, type FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ROUTER_KEYS} from "../../shared/keys";
import {AuthHint} from "../../shared/ui";
import {useAuthStore} from "../../store";
import type {AuthFormProps} from "./types.ts";

export const AuthForm: FC<AuthFormProps> = ({mode}) => {
    const navigate = useNavigate();
    const {login, register, loading, fieldErrors} = useAuthStore();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (mode === "login") {
            login(email, password);
            navigate(ROUTER_KEYS.DASHBOARD);
        } else {
            register(email, password);
            navigate(ROUTER_KEYS.DASHBOARD);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{mt: 2, mx: "auto", maxWidth: "500px", width: "100%"}}>
            <Typography variant="h3" sx={{fontWeight: "bold"}}>{mode === "login" ? "Login" : "Register"}</Typography>
            <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                error={Boolean(fieldErrors?.email)}
                helperText={fieldErrors?.email?.join(", ")}
            />
            <TextField
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
                error={Boolean(fieldErrors?.password)}
                helperText={fieldErrors?.password?.join(", ")}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    aria-label="toggle password visibility"
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />
            <Button
                fullWidth
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{mt: 2, maxWidth: "100px", width: "100%"}}
            >
                {loading ? (mode === "login" ? "Logging in..." : "Registering...") : (mode === "login" ? "Login" : "Register")}
            </Button>

            {mode === "login" && (
                <AuthHint text={"Don't have an account?"} linkText={"Register"} linkTo={ROUTER_KEYS.REGISTER} />
            )}
            {mode === "register" && (
                <AuthHint text={"Already have an account?"} linkText={"Login"} linkTo={ROUTER_KEYS.LOGIN} />
            )}
        </Box>
    );
};
