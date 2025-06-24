import { CircularProgress, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useAuthStore } from "../../store";
import { Header } from "../header/Header.tsx";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const {loading} = useAuthStore();
  if (loading) return <CircularProgress/>;
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>
      <Container maxWidth="lg">
        <Outlet/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
