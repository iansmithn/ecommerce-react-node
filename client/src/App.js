import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { darkTheme } from "./Theme/DarkTheme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
