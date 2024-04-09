import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import StateProvider from "./states/StateProvider";

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
      danger: {
        main: red[800],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <StateProvider>
        <RouterProvider router={router} />
      </StateProvider>
    </ThemeProvider>
  );
}

export default App;
