import { GetServerSideProps } from "next";
import { apolloClient } from "services/strapi";
import { gql } from "@apollo/client";
import { ProductExtended } from "types/types";

import {
  ProductContainer,
  ImageContainer,
  Info,
  Description,
  StyledModal,
  ModalInfo,
} from "./id.style";
import QuantityInput from "assets/QuantityInput";
import Button from "assets/button";
import { useState } from "react";
import { Box } from "reflexbox";
import { Product } from "types/types";
import Modal from "react-modal";

Modal.setAppElement("#__next");

export default function ProductPage({ product }: ProductExtended) {
  const [inputValue, setInputValue] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const transferProduct: Product = Object.assign(
    { quantity: inputValue },
    product
  );

  return (
    <Box as="main">
      <ProductContainer>
        <ImageContainer>
          <img src={process.env.API_URL + product.photo.url} />
        </ImageContainer>
        <Info>
          <h2>{product.title}</h2>
          <h3>{product.price} zł</h3>
          <QuantityInput setValue={setInputValue} value={inputValue} />
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
      <StyledModal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        style={{ overlay: { background: "rgba(0,0,0,0.4)" } }}
      >
        <h3>Produkt został dodany do koszyka</h3>
        <ModalInfo>
          <div>
            <img
              src={process.env.API_URL + product.photo.url}
              alt={product.title}
            />
            <p>
              {product.title}
              <br />
              <span>ilosc:</span> {inputValue}
            </p>
          </div>
          <div>
            <p>
              {(product.price * inputValue).toFixed(2)}
              zł
            </p>
            <Button>Pokaż koszyk</Button>
          </div>
        </ModalInfo>
      </StyledModal>
    </Box>
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
