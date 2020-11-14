import styled from "@emotion/styled";
import { useDispatchCart } from "components/cart";

type Props = {
  setValue: (value: number | number[]) => void;
  value: number & number[];
  id?: number;
};

export default function QuantityInput({ setValue, value, id }: Props) {
  const dispatch = useDispatchCart();

  const onChange = (e: React.FormEvent) => {
    const val: number = (e.target as any).value;
    setValue(val);
  };

  const onButtonClick = (increase: boolean) => {
    if (increase) {
      if (id! >= 0) {
        const val = value.map((item, mapId) => (mapId == id ? item + 1 : item));
        setValue(val);
        dispatch({ type: "CHANGE", id, value: val[id!] });
      } else setValue(value + 1);
    } else {
      if (id! >= 0) {
        const val = value.map((item, mapId) =>
          mapId == id ? (item > 1 ? item - 1 : item) : item
        );
        setValue(val);
        dispatch({ type: "CHANGE", id, value: val[id!] });
      } else setValue(value > 1 ? value - 1 : value);
    }
  };

  return (
    <InputContainer cart={id !== undefined ? true : false}>
      <input
        type="number"
        value={id! >= 0 ? value[id!] : value}
        onChange={onChange}
        disabled
      />
      <button onClick={() => onButtonClick(true)}>+</button>
      <button onClick={() => onButtonClick(false)}>-</button>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  color: ${(props: any) => props.theme.colors.gray};
  input {
    border: 2px solid ${(props: any) => props.theme.colors.primary};
    /* background: ${(props: any) => (props.cart ? "red" : "white")}; */
    width: 100px;
    margin: 0;
    padding: 0.5rem 2rem;
    text-align: center;

    :focus {
      outline: none;
    }

    @media (max-width: 768px) {
      width: ${(props: any) => props.cart && "75px"};
    }
    @media (max-width: 350px) {
      padding: ${(props: any) => props.cart && "0.5rem 1rem"};
      width: ${(props: any) => props.cart && "60px"};
      font-size: ${(props: any) => props.cart && "0.7rem"};
    }
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  button {
    margin: 0 0.5rem;
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    border: 2px solid ${(props: any) => props.theme.colors.primary};
    border-radius: 50%;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    :hover {
      color: ${(props: any) => props.theme.colors.primary};
    }

    @media (max-width: 768px) {
      width: ${(props: any) => props.cart && "30px"};
      height: ${(props: any) => props.cart && "30px"};
      font-size: ${(props: any) => props.cart && "1rem"};
    }

    @media (max-width: 350px) {
      width: ${(props: any) => props.cart && "25px"};
      height: ${(props: any) => props.cart && "25px"};
      font-size: ${(props: any) => props.cart && "0.8rem"};
    }
  }
`;
