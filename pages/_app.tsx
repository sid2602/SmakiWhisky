import type { AppProps } from "next/app";
// import { GlobalStyle } from "../styles";
import Header from "components/navigation/navigation";
import { ThemeProvider } from "emotion-theming";
import theme from "assets/theme";
import GlobalStyle from "assets/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
