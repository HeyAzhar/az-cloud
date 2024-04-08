import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
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
      <Paper
        elevation={12}
        sx={{
          margin: 10,
          padding: 10,
          color: "secondary.main",
          bgcolor: "primary.main",
          width: "fit-content",
          height: 300,
        }}
      >
        <Typography variant='h1' fontWeight={900}>
          Hello World
        </Typography>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
