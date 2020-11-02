import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
};

export default function Button({ children }: Props) {
  return <ButtonStyled>{children}</ButtonStyled>;
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
