import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {Outlet} from "react-router-dom";

const theme = createTheme({
    palette: {
        mode: "light",
    },
});

function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div>App</div>
            <Outlet />
        </ThemeProvider>
    );
}

export default App;
