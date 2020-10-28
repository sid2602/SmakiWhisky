import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { gql, from } from "@apollo/client";
import { apolloClient } from "../../services/strapi";
import { Products } from "types/types";
import Card from "assets/card";
import { Box, Flex } from "reflexbox";
export default function Origin({ products }: Products) {
  return (
    <Box width={{ _: "100%", md: "80%" }} as="main" margin="1rem auto">
      <Flex width="100%" flexWrap="wrap" justifyContent="space-between">
        {products.map((product) => (
          <Box width={{ _: "80%", md: "30%" }} key={product.title}>
            <Card product={product} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { origin } = context.query;

  const categories = await apolloClient.query({
    query: gql`
      {
        categories(where: { name: "${origin}" }) {
          id
          name
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
    props: { products: categories.data.categories[0].products },
  };
};
