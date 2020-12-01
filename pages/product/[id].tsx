import { GetServerSideProps } from "next";
import { apolloClient } from "services/strapi";
import { gql } from "@apollo/client";
import { ProductExtended } from "types/types";

import {
  ProductContainer,
  ImageContainer,
  Info,
  Description,
} from "assets/product.style";
import QuantityInput from "assets/QuantityInput";
import Button from "assets/button";
import { useState } from "react";
import { Box } from "reflexbox";
import { Product } from "types/types";
import Modal from "components/modal/modal";
import Image from "assets/lazyImage";
import { NextSeo } from "next-seo";

export default function ProductPage({ product }: ProductExtended) {
  const SEO = {
    title: `Smaki Whisky | ${product.title}`,
    description: `${product.description.vision} ${product.description.smell} ${product.description.taste}`,

    openGraph: {
      title: `Smaki Whisky | ${product.title}`,
      description: `${product.description.vision} ${product.description.smell} ${product.description.taste}`,
    },
  };

  const [inputValue, setInputValue] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const transferProduct: Product = Object.assign(
    { quantity: inputValue },
    product
  );

  return (
    <>
      <NextSeo {...SEO} />
      <Box as="main">
        <ProductContainer>
          <ImageContainer>
            <Image src={product.photo.url} alt={product.title} />
          </ImageContainer>
          <Info>
            <h2>{product.title}</h2>
            <h3>{product.price} zł</h3>
            <QuantityInput
              setValue={setInputValue as (value: number[] | number) => void}
              value={inputValue as number & number[]}
            />
            <Button product={transferProduct} setOpenModal={setOpenModal}>
              Dodaj do koszyka
            </Button>
          </Info>
        </ProductContainer>
        <Description>
          <h3>Opis produktu</h3>
          <p>
            <span>Oko: </span>
            {product.description.vision}
          </p>
          <p>
            <span>Węch: </span>
            {product.description.smell}
          </p>
          <p>
            <span>Smak: </span>
            {product.description.taste}
          </p>
          <p>
            <span>Finish: </span>
            {product.description.finish}
          </p>
        </Description>
        <Modal
          product={product}
          inputValue={inputValue}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </Box>
    </>
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
