import styled from "@emotion/styled";

import { Product } from "types/types";
import { useDispatchCart } from "components/cart/index.js";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  product?: Product;
  setOpenModal?: (value: boolean) => void;
  href?: string;
  submit?: boolean;
};

export default function Button({
  children,
  product,
  setOpenModal,
  href,
  submit,
}: Props) {
  const dispatch = useDispatchCart();

  const addToChart = () => {
    dispatch({ type: "ADD", item: product });
    setOpenModal!(true);
  };

  return (
    <>
      {product ? (
        <ButtonStyled onClick={addToChart}>{children}</ButtonStyled>
      ) : submit ? (
        <ButtonStyled type="submit">{children}</ButtonStyled>
      ) : (
        <Link href={href!}>
          <a>
            <ButtonStyled>{children}</ButtonStyled>
          </a>
        </Link>
      )}
    </>
  );
}

const ButtonStyled = styled.button`
  margin: 1rem 0;
  color: white;
  background-color: ${(props: any) => props.theme.colors.primary};
  border: 2px solid ${(props: any) => props.theme.colors.primary};
  padding: 0.7rem 1.4rem;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  :hover {
    background-color: white;
    color: black;
  }
`;
