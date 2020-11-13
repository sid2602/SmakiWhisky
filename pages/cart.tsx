import { useCart } from "components/cart/index";
import Heading from "assets/heading";
import { Box, Flex } from "reflexbox";
import styled from "@emotion/styled";
import { useState } from "react";
import { Product } from "types/types";
import QuantityInput from "assets/QuantityInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatchCart } from "components/cart/index";
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
      <Box flex={1} textAlign="center">
        <Image src={process.env.API_URL + item.photo.url} alt="" />
      </Box>
      <Flex flexDirection="column" flex={1} fontSize="1rem" alignItems="center">
        <h3>{item.title}</h3>
        <QuantityInput value={inputsValue} setValue={setInputsValue} id={id} />
        <Flex alignItems="center" fontSize="1.2rem">
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
          <>{mapProducts}</>
        )}
      </Box>
    </>
  );
}

const ItemContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
  position: relative;
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
`;

const RemoveBtn = styled.button`
  display: block;
  position: absolute;
  right: 10%;
  top: -10%;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Image = styled.img`
  height: 200px;

  @media (max-width: 500px) {
    height: 150px;
  }
`;

const Price = styled.p`
  margin-left: 6rem;
`;
