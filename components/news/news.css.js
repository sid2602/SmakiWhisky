import styled from "@emotion/styled";

export const A = styled.a`
  cursor: pointer;

  :hover img {
    transform: scale(1.1);
  }

  span > img {
    width: 100%;
    transition: 0.8s ease-in-out, 0.3s opacity ease-in-out !important;
  }
`;
