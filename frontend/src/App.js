import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#636363",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFA559",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
