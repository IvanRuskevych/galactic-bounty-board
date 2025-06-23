import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ROUTER_KEYS} from "../../shared/keys";
import {AuthButton, NavigationButton} from "../../shared/ui";
import {useAuthStore} from "../../store";

export const Header = () => {
    const navigate = useNavigate();
    const {isAuth, logout} = useAuthStore();

    const handleLogout = async () => {
        logout();
        navigate(ROUTER_KEYS.HOME);
    };

    return (
        <AppBar position="static">
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                {/* Left: Logo */}
                <Typography variant="h6">
                    <NavigationButton to={ROUTER_KEYS.HOME} label="Galactic Bounty Board" />
                </Typography>

                {/* Center: Navigation buttons */}
                <Box sx={{display: "flex", gap: 2}}>
                    <NavigationButton to={ROUTER_KEYS.HOME} label="Public Bounties" />
                    {isAuth && <NavigationButton to={ROUTER_KEYS.DASHBOARD} label="My Bounties" />}
                </Box>

                {/* Right: Auth buttons */}
                <Box sx={{display: "flex", gap: 1}}>
                    {isAuth ?
                        (<AuthButton type="logout" onClick={handleLogout} />) :
                        (<NavigationButton to={ROUTER_KEYS.LOGIN} label="Login" />)}
                </Box>
            </Toolbar>
        </AppBar>
    );
};
