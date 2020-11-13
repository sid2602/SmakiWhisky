import type { AppProps, AppContext } from "next/app";
// import { GlobalStyle } from "../styles";
import Navigation from "components/navigation/navigation";
import { ThemeProvider } from "emotion-theming";
import theme from "assets/theme";
import GlobalStyle from "assets/globalStyles";

import { apolloClient } from "services/strapi";
import { gql } from "@apollo/client";
import { Navigations } from "types/types";
import Footer from "components/footer/footer";

import { CartProvider } from "components/cart/index.js";

type Props = {
  logo: string;
};

function MyApp({
  Component,
  pageProps,
  data,
  logo,
}: AppProps & Navigations & Props) {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation data={data} logo={logo} />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CartProvider>
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

  const {
    data: { logos },
  } = await apolloClient.query({
    query: gql`
      {
        logos {
          logo {
            url
          }
        }
      }
    `,
  });

  // console.log(window.localStorage.getItem("products"));

  return { data: data.navigations, logo: logos[0].logo.url };
};

export default MyApp;
