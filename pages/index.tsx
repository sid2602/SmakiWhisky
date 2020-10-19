import { GetServerSideProps } from "next";
import { gql } from "@apollo/client";
import { apolloClient } from "../services/strapi";
import { Products } from "types/types";

export default function Home({ products }: Products) {
  return <>something</>;
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

  return {
    props: { products: data.products },
  };
};
