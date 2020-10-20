import { GetServerSideProps } from "next";
import { gql } from "@apollo/client";
import { apolloClient } from "../services/strapi";
import { Products } from "types/types";
import { Flex, Box } from "reflexbox";
import { Baners } from "types/types";
import SliderComponent from "components/SliderComp/sliderComp";

export default function Home({ products, baners }: Products & Baners) {
  return (
    <Box as="main" mx="auto" maxWidth={1200} width="100%" px={30}>
      <SliderComponent baners={baners} />
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await apolloClient.query({
    query: gql`
      {
        products {
          title
          price
          description
        }
      }
    `,
  });

  const baner = await apolloClient.query({
    query: gql`
      {
        baners {
          name
          slug
          photo {
            url
          }
        }
      }
    `,
  });

  return {
    props: { products: data.products, baners: baner.data.baners },
  };
};
