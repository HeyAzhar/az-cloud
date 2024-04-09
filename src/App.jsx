import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./App.css";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: '"Inter", sans-serif',
    },
    palette: {
      primary: {
        main: "#0646C6",
      },
      secondary: {
        main: "#f0f5ff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
