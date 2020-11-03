import styled from "@emotion/styled";

export default function Error() {
  return (
    <ErrorContainer>
      <h1>404</h1>
      <h3>Ta strona nie instieje</h3>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  h1 {
    font-size: 7rem;
    margin: 0;
    color: ${(props: any) => props.theme.colors.primary};
  }

  h3 {
    font-size: 1.2rem;
  }
`;
