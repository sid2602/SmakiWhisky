import styled from "@emotion/styled";
import Modal from "react-modal";

export const ProductContainer = styled.section`
  display: flex;
  width: 60%;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  flex: 3;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${(props: any) => props.theme.colors.primary};
  > img {
    height: 100%;
    max-height: 500px;
  }

  @media (max-width: 768px) {
    border: none;
    margin-bottom: 1rem;
  }
`;

export const Info = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 1rem;
  h2,
  h3 {
    font-size: 1.5rem;
    padding: 0 2rem;
    text-align: center;
  }

  h3 {
    width: 150px;
    padding-bottom: 1rem;
    color: red;
    font-size: 1.2rem;

    color: ${(props: any) => props.theme.colors.gray};
    border-bottom: 2px solid ${(props: any) => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    > div {
      margin: 1.5rem 0;
    }
  }
`;

export const Description = styled.section`
  width: 60%;
  margin: 3rem auto;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(168, 168, 168, 1);
  -moz-box-shadow: 0px 0px 20px 0px rgba(168, 168, 168, 1);
  box-shadow: 0px 0px 20px 0px rgba(168, 168, 168, 1);
  padding: 1rem 1rem 2rem 1rem;
  /* border: 1px solid ${(props: any) => props.theme.colors.primary}; */
  h3 {
    text-align: center;
    font-size: 1.5rem;
    margin: 2rem 0;
  }

  p {
    span {
      font-weight: bold;
    }
  }

  @media (max-width: 1024px) {
    width: 80%;
    margin: 1.5rem auto;
  }
`;
