import styled from "@emotion/styled";
import { Product } from "types/types";
import Link from "next/link";
import Image from "assets/lazyImage";
type Props = {
  product: Product;
};

export default function Card({ product }: Props) {
  return (
    <Link href={`/product/${encodeURIComponent(product.id)}`}>
      <CardStyled>
        <Image src={product.photo.url} alt={product.title} />
        <p className="title">{product.title}</p>
        <div className="border" />
        <p>{product.price} zł</p>
      </CardStyled>
    </Link>
  );
}

const CardStyled = styled.a`
  cursor: pointer;
  width: 100%;
  height: 320px;
  margin: 1rem auto 1rem;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  outline: none;

  padding: 0.5rem 0.5rem 0 0.5rem;
  span {
    height: 60%;
  }
  img {
    height: 100%;
  }

  p {
    text-align: center;
    color: ${(props: any) => props.theme.colors.gray};
  }

  .title {
    font-size: 1rem;
  }

  .border {
    width: 50%;
    height: 1px;
    background-color: ${(props: any) => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;
