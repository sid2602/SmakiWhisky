import { GetServerSideProps } from "next";
import { gql } from "@apollo/client";
import { apolloClient } from "../services/strapi";

type Product = {
  _typename: string;
  title: string;
  price: number;
  description: string;
};

export default function Home({ products }: Product[]) {
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
