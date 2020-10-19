import type { AppProps, AppContext } from "next/app";
// import { GlobalStyle } from "../styles";
import Navigation from "components/navigation/navigation";
import { ThemeProvider } from "emotion-theming";
import theme from "assets/theme";
import GlobalStyle from "assets/globalStyles";

import { apolloClient } from "services/strapi";
import { gql } from "@apollo/client";
import { Navigations } from "types/types";

function MyApp({ Component, pageProps, data }: AppProps & Navigations) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation data={data} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      {
        navigations {
          name
          id
          slug
          item {
            ... on ComponentMenuMenu {
              id
              name
              slug
            }
          }
        }
      }
    `,
  });

  return { data: data.navigations };
};

export default MyApp;
