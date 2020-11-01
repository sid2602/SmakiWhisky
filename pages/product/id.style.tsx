import styled from "@emotion/styled";

export const ProductContainer = styled.section`
  display: flex;
  width: 80%;
  margin: 0 auto;

  .mobileHeader {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  flex: 3;
  height: 50vh;
  display: flex;
  justify-content: center;
  border-right: 1px solid black;
  > img {
    height: 100%;
  }
`;

export const Info = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2,
  h3 {
    font-size: 1.5rem;
    padding: 0 2rem;
  }

  h3 {
    width: 100%;
    color: red;
    font-size: 1.2rem;
    color: ${(props: any) => props.theme.colors.gray};
  }
`;
