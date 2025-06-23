import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {Outlet} from "react-router-dom";
import {Header} from "../header/Header.tsx";

const theme = createTheme({
    palette: {
        mode: "light",
    },
});

function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Container maxWidth="lg">
                <Outlet />
            </Container>
        </ThemeProvider>
    );
}

export default App;
