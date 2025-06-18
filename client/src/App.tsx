import {Container, createTheme, CssBaseline, ThemeProvider} from '@mui/material'
import {BountyList} from "./components/bounty/BountyList.tsx";

const theme = createTheme({
    palette: {
        mode: 'light',
    }
})

function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container>
                <h1>Galactic Bounty Board</h1>
                <BountyList/>
            </Container>
        </ThemeProvider>
    )
}

export default App
