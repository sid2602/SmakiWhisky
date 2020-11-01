import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { gql, from } from "@apollo/client";
import { apolloClient } from "../../services/strapi";
import { Products, Product } from "types/types";
import Card from "assets/card";
import { Box, Flex } from "reflexbox";
import styled from "@emotion/styled";
import Heading from "assets/heading";

type Origin = {
  origin: string;
};

type Result = {
  result: {
    name: string;
    title: string;
    products: Array<Product>;
  };
};

export default function Origin({ result }: Result) {
  const { products } = result;

  return (
    <Box width={{ _: "100%", lg: "80%" }} as="main" margin="1rem auto">
      <Box width="80%" m="0 auto">
        <Heading small={true}>
          {result.title ? result.title : "Wynik wyszukiwania"}
        </Heading>
      </Box>

      <Flex
        width="100%"
        flexWrap="wrap"
        justifyContent={{ _: "center", md: "start" }}
      >
        {products.length > 0 ? (
          products.map((product) => (
            <Box width={{ _: "80%", md: "33.3%" }} key={product.title}>
              <Card product={product} />
            </Box>
          ))
        ) : (
          <NoProduct>Brak danego produktu</NoProduct>
        )}
      </Flex>
    </Box>
  );
}

const NoProduct = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 1.5em;
`;

type Category = {
  name: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { origin } = context.query;

  const {
    data: { categories },
  } = await apolloClient.query({
    query: gql`
      {
        categories {
          name
        }
      }
    `,
  });

  let result = [];

  const cat: Array<Category> = categories;

  if (cat.find((category) => category.name === origin)) {
    const { data } = await apolloClient.query({
      query: gql`
      {
        categories(where: { name: "${origin}" }) {
          id
          name
          title
          products {
            title
            price
            id
            photo {
              url
            }
          }
        }
      }
    `,
    });
    result = data.categories;
  } else {
    const { data } = await apolloClient.query({
      query: gql`
      {
        products(where: { title: "${origin}" }) { 
          title
          price
          id
          photo {
            url
          }
        }
      }
    `,
    });
    result = [data];
  }

  return {
    props: {
      result: result.length > 0 ? result[0] : [],
    },
  };
};
