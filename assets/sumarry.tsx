import { useState, useEffect } from "react";
import { useCart } from "components/cart";
import { Product } from "types/types";
import styled from "@emotion/styled";

type Props = {
  checkout?: boolean;
};

export default function Summarry({ checkout = false }: Props) {
  const products = useCart();

  useEffect(() => {
    let price = 0;
    products.forEach((product: Product) => {
      price += product.price * product.quantity!;
    });
    setOrderCost(price);
  }, [products]);

  const [orderCost, setOrderCost] = useState(0);

  return (
    <SummarryStyled>
      <div>
        <div className="price">
          <p>Wartość zamówienia</p>
          <p>{orderCost.toFixed(2)}</p>
        </div>
        <div className="price">
          <p>Koszt przesyłki </p>
          <p>{orderCost >= 400 ? 0 : 25} zł</p>
        </div>
        <div className="price">
          <h4>Koszt całkowity</h4>
          <h4>
            {orderCost >= 400
              ? orderCost.toFixed(2)
              : (orderCost + 25).toFixed(2)}
            zł
          </h4>
        </div>
      </div>
    </SummarryStyled>
  );
}

const SummarryStyled = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  width: 500px;
  padding: 3rem 2rem 1rem;
  margin: 0 auto;
  text-align: center;
  /* border: 1px solid black; */
  .price {
    display: flex;
    font-size: 1.2rem;
    justify-content: space-between;
  }

  button {
    margin: 2rem 0 0;
  }

  @media (max-width: 768px) {
    width: 350px;
    .price {
      font-size: 1rem;
    }
  }

  @media (max-width: 400px) {
    width: 280px;
  }
`;
