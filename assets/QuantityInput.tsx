import styled from "@emotion/styled";
import { useDispatchCart } from "components/cart";

type Props = {
  setValue: (value: number | number[]) => void;
  value: number & number[];
  id?: number;
};

export default function QuantityInput({ setValue, value, id }: Props) {
  const onChange = (e: React.FormEvent) => {
    const val: number = (e.target as any).value;

    setValue(val);
  };

  const onButtonClick = (increase: boolean) => {
    if (increase) {
      if (id! >= 0) {
        const val = value.map((item, mapId) => (mapId == id ? item + 1 : item));
        setValue(val);
      } else setValue(value + 1);
    } else if (value > 1) {
      if (id! >= 0) {
        const val = value.map((item, mapId) => (mapId == id ? item - 1 : item));
        setValue(val);
      } else setValue(value - 1);
    }
  };

  return (
    <InputContainer>
      <input
        type="number"
        value={id! >= 0 ? value[id!] : value}
        onChange={onChange}
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
    width: 100px;
    margin: 0;
    padding: 0.5rem 2rem;
    text-align: center;

    :focus {
      outline: none;
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
  }
`;
