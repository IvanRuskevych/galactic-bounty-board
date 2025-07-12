import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { NavigationBar } from "~/modules/navigation/NavigationBar";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
	palette: {
		mode: "light",
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<NavigationBar />

			<Container maxWidth="lg" sx={{ pt: 10 }}>
				<Outlet />
			</Container>

			<CssBaseline />
			<ToastContainer
				position="top-right"
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
