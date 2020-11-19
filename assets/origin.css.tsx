import styled from "@emotion/styled";

export const FilterContainer = styled.div`
  width: 90%;
  margin: 1rem auto 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 2px solid ${(props: any) => props.theme.colors.primary};

  select,
  input {
    margin: 0 0.5rem;
    outline: none;
  }

  select {
    padding: 0.3rem;
    cursor: pointer;
    border: 1px solid ${(props: any) => props.theme.colors.primary};
  }

  .filter {
    display: flex;
    align-items: center;
  }

  input {
    background: ${(props: any) => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 70%;
    div {
      margin: 1rem 0;
      text-align: center;
    }
    .filter {
      flex-direction: column;
    }
    select,
    input {
      margin: 0.5rem 0.5rem;
    }
  }
`;

export const NoProduct = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 1.5em;
`;
