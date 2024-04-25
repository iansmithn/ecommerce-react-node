import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { darkTheme } from "./Theme/DarkTheme";
import Home from "./components/Home/Home";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
