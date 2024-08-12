import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import { ThemeProvider } from "@emotion/react";
import { muiTheme } from "./theme/mui-theme";
import { CssBaseline } from "@mui/material";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Provider store={store}>
      <PersistGate persistor={persister}> */}
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
    {/* </PersistGate>
    </Provider> */}
  </StrictMode>
);
