import { GetServerSideProps } from "next";
import { gql } from "@apollo/client";
import { apolloClient } from "../services/strapi";
import { Flex, Box } from "reflexbox";
import { Products, Baners, News, Recomendeds } from "types/types";
import SliderComponent from "components/SliderComp/sliderComp";
import NewsComponent from "components/news/news";

import Recomended from "components/Recomended/Recomended";
export default function Home({
  products,
  baners,
  news,
  recomendeds,
}: Products & Baners & News & Recomendeds) {
  return (
    <Box as="main" mx="auto" maxWidth={1200} width="100%" px={30}>
      <SliderComponent baners={baners} />
      <NewsComponent news={news} />
      <Recomended recomendeds={recomendeds} />
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
          photo {
            url
          }
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

  const news = await apolloClient.query({
    query: gql`
      {
        news {
          name
          slug
          photo {
            url
          }
        }
      }
    `,
  });

  const recomendeds = await apolloClient.query({
    query: gql`
      {
        recomendeds {
          products {
            title
            price
            photo {
              url
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      products: data.products,
      baners: baner.data.baners,
      news: news.data.news,
      recomendeds: recomendeds.data.recomendeds[0].products,
    },
  };
};
