import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { NavigationBar } from "../navigation/NavigationBar.tsx";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationBar/>
      
      <Container maxWidth="lg" sx={{pt: 10}}>
        <Outlet/>
      </Container>
      
      <CssBaseline/>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ThemeProvider>
  );
}

export default App;
