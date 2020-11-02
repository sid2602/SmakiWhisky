import styled from "@emotion/styled";
import { useState } from "react";

export default function QuantityInput() {
  const [value, setValue] = useState(1);

  const onChange = (e: React.FormEvent) => {
    const value: number = (e.target as any).value;
    setValue(value);
  };

  const onButtonClick = (increase: boolean) => {
    if (increase) setValue(value + 1);
    else {
      if (value > 1) setValue(value - 1);
    }
  };

  return (
    <InputContainer>
      <input type="number" value={value} onChange={onChange} />
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
