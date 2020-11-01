import styled from "@emotion/styled";
import React from "react";

type Props = {
  children: React.ReactNode;
  small?: boolean;
};

const Heading = ({ children, small = false }: Props) => (
  <Container small={small}>
    <div />
    <HeadingStyled small={small}>{children}</HeadingStyled>
    <div />
  </Container>
);

const Container = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  div {
    background-color: ${(props: any) => props.theme.colors.primary};
    flex: 1;
    height: 3px;
    margin: 0 1rem;
    /* width: 20%; */
  }

  @media (max-width: 768px) {
    width: 100%;
    div {
      display: ${(props) => props.small && "none"};
    }
  }
`;

const HeadingStyled = styled.h2`
  flex: 2;
  display: block;
  width: 100%;
  font-size: ${(props) => (props.small ? "2rem" : "3rem")};
  font-family: "Source Sans Pro", sans-serif;
  text-align: center;
  position: relative;
  font-weight: normal;
  padding: 0 1rem;

  /* ::before,
  ::after {
    content: " ";
    position: absolute;
    width: ${(props) => (props.small ? "20%" : "25%")};
    height: 4px;
    border-radius: 10%;
    top: 50%;
    background-color: ${(props: any) => props.theme.colors.primary};
  }

  ::before {
    left: 10%;
  }

  ::after {
    right: 10%;
  } */

  @media (max-width: 1024px) {
    font-size: ${(props) => (props.small ? "1.5rem" : "2.5rem")};
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
