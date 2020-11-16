import { useCart } from "components/cart/index";
import Heading from "assets/heading";
import { Box, Flex } from "reflexbox";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { Product } from "types/types";
import QuantityInput from "assets/QuantityInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatchCart } from "components/cart/index";
import Button from "assets/button";
import Sumarry from "assets/sumarry";
export default function Cart() {
  const dispatch = useDispatchCart();
  const products = useCart();

  const qunatityOfProducts = products.map(
    (product: Product) => product.quantity
  );

  const [inputsValue, setInputsValue] = useState(qunatityOfProducts);

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE", id });
  };

  const mapProducts = products.map((item: Product, id: number) => (
    <ItemContainer key={item.title}>
      <RemoveBtn onClick={() => removeItem(id)}>
        <FontAwesomeIcon icon={faTimes} />
      </RemoveBtn>
      <Box flex={{ _: 2, md: 1 }} textAlign="center">
        <Image src={process.env.API_URL + item.photo.url} alt={item.title} />
      </Box>
      <Flex
        flexDirection="column"
        flex={{ _: 3, md: 1 }}
        fontSize={{ _: "0.7rem", md: "1rem" }}
        alignItems="center"
        textAlign="center"
      >
        <h3>{item.title}</h3>
        <QuantityInput value={inputsValue} setValue={setInputsValue} id={id} />
        <Flex alignItems="center" fontSize={{ _: "0.9rem", md: "1.2rem" }}>
          <h4>Cena: </h4>
          <Price>{(item.quantity! * item.price).toFixed(2)}</Price>
        </Flex>
      </Flex>
    </ItemContainer>
  ));

  return (
    <>
      <Box as="main" mx="auto" maxWidth={1200} width="100%" px={30}>
        <Heading>Koszyk</Heading>
        {products.length === 0 ? (
          <Box as="h2" textAlign="center">
            Twój koszyk jest pusty
          </Box>
        ) : (
          <Box as="section" textAlign="center">
            {mapProducts}
            <Sumarry />
            <Button href={"/checkout"}>Przejdź do kasy</Button>
          </Box>
        )}
      </Box>
    </>
  );
}

const ItemContainer = styled.article`
  display: flex;
  margin-bottom: 3rem;
  position: relative;
  align-items: center;
  ::after {
    position: absolute;
    content: " ";
    width: 80%;
    left: 50%;
    bottom: -10%;
    transform: translate(-50%, -50%);
    height: 1px;
    background: ${(props: any) => props.theme.colors.primary};
  }

  @media (max-width: 400px) {
    ::after {
      width: 100%;
    }
  }
`;

const RemoveBtn = styled.button`
  display: block;
  position: absolute;
  right: 10%;
  top: -7%;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    right: 5%;
    font-size: 1rem;
  }
`;

const Image = styled.img`
  height: 200px;

  @media (max-width: 500px) {
    height: 150px;
  }

  @media (max-width: 350px) {
    height: 120px;
  }
`;

const Price = styled.p`
  margin-left: 6rem;

  @media (max-width: 768px) {
    margin-left: 4rem;
  }
`;
