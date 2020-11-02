import { GetServerSideProps } from "next";
import { apolloClient } from "services/strapi";
import { gql } from "@apollo/client";
import { ProductExtended } from "types/types";

import { ProductContainer, ImageContainer, Info } from "./id.style";
import QuantityInput from "assets/QuantityInput";
import Button from "assets/button";
export default function Product({ product }: ProductExtended) {
  return (
    <ProductContainer>
      <h2 className="mobileHeader">{product.title}</h2>
      <ImageContainer>
        <img src={process.env.API_URL + product.photo.url} />
      </ImageContainer>
      <Info>
        <h2>{product.title}</h2>
        <h3>{product.price} zł</h3>
        <QuantityInput />
        <Button>Dodaj do koszyka</Button>
      </Info>
    </ProductContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const {
    data: { products },
  } = await apolloClient.query({
    query: gql`
      {
        products(where:{id:${id}}) {
          title
            price
            id
            photo {
              url
            }
          description{
            vision
            smell
            taste
            finish
          }
          
        }
      }
    `,
  });

  return { props: { product: products.length > 0 ? products[0] : [] } };
};
