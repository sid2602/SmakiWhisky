import styled from "@emotion/styled";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Heading = ({ children }: Props) => (
  <HeadingStyled>{children}</HeadingStyled>
);

const HeadingStyled = styled.h2`
  display: block;
  width: 100%;
  margin-top: 3rem;
  font-size: 3rem;
  font-family: "Source Sans Pro", sans-serif;
  text-align: center;
  position: relative;
  font-weight: normal;

  ::before,
  ::after {
    content: " ";
    position: absolute;
    width: 25%;
    height: 4px;
    border-radius: 10%;
    top: 50%;
    background-color: ${(props) => props.theme.colors.primary};
  }

  ::before {
    left: 10%;
  }

  ::after {
    right: 10%;
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;

    ::before,
    ::after {
      height: 3px;
      width: 20%;
    }

    ::before {
      left: 0%;
    }

    ::after {
      right: 0;
    }
  }

  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
`;

export default Heading;
