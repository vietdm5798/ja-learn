import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "@/stores";
import { NotificationGroup } from "@/components/Notification/NotificationGroup";

const theme = createTheme({
  typography: {
    fontFamily: "'Mulish', sans-serif",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <NotificationGroup />
      </ThemeProvider>
    </Provider>
  );
}
