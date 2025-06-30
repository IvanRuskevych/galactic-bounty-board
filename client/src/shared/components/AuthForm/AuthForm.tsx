import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { type FC, type FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store";
import type { AuthFormProps } from "../../../typings";
import { AuthAction } from "../../constants";
import { ROUTER_KEYS } from "../../keys";
import { AuthHint } from "../../ui";
import { EmptyState } from "../EmptyState/EmptyState.tsx";

export const AuthForm: FC<AuthFormProps> = ({mode}) => {
  const navigate = useNavigate();
  const {login, register, loading, fieldErrors, resetErrors} = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (mode === AuthAction.LOGIN) {
      login(email, password);
      if (!resetErrors) navigate(ROUTER_KEYS.DASHBOARD);
    } else {
      register(email, password);
      if (!resetErrors) navigate(ROUTER_KEYS.DASHBOARD);
    }
  };
  
  useEffect(() => {
    resetErrors()
  }, [mode]);
  
  if (loading) return <EmptyState loading={loading}/>
  
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{mt: 2, mx: "auto", maxWidth: "500px", width: "100%"}}>
      <Typography variant="h3" sx={{fontWeight: "bold"}}>{mode === AuthAction.LOGIN ? "Login" : "Register"}</Typography>
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
                  {showPassword ? <VisibilityOff/> : <Visibility/>}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
      <Button fullWidth type="submit" variant="contained" disabled={loading}
              sx={{mt: 2, maxWidth: "100px", width: "100%"}}>
        {mode === AuthAction.LOGIN ? "Login" : "Register"}
      </Button>
      
      {mode === AuthAction.LOGIN && (
        <AuthHint text={"Don't have an account?"} linkText={"Register"} linkTo={ROUTER_KEYS.REGISTER}/>
      )}
      {mode === AuthAction.REGISTER && (
        <AuthHint text={"Already have an account?"} linkText={"Login"} linkTo={ROUTER_KEYS.LOGIN}/>
      )}
    </Box>
  );
};
