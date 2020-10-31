import styled from "@emotion/styled";
import { Box, Flex } from "reflexbox";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <FooterStyled>
      <Flex
        flexDirection={{ _: "column" }}
        width="80%"
        justifyContent="center"
        alignItems="center"
        margin="0 auto"
      >
        <Box width="100%">
          <h3>Social Media</h3>
          <Flex justifyContent="center">
            <a href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.youtube.com">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </Flex>
        </Box>
        <Box width="100%" mt="1rem">
          <h3>Kontakt</h3>
          <a href="tel:1-12 512 513 584" className="contact">
            <FontAwesomeIcon icon={faPhone} />
            12 512 513 584
          </a>
          <a href="tel:1-12 512 513 584" className="contact">
            <FontAwesomeIcon icon={faEnvelope} />
            smakiwhisky@gmail.com
          </a>
        </Box>
      </Flex>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #eeeeee;
  padding: 2rem;

  h3 {
    font-size: 2rem;
    text-align: center;
    font-family: "Source Sans Pro", sans-serif;
  }

  a:hover,
  svg:hover,
  a:hover > svg {
    color: black;
  }

  svg {
    font-size: 2.5rem;
    color: ${(props: any) => props.theme.colors.gray};
    margin: 0 2rem;
    transition: 0.4s;
  }

  .contact {
    margin: 1rem 0;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
    color: ${(props: any) => props.theme.colors.gray};

    svg {
      margin: 0.5rem;
    }
  }

  @media (max-width: 500px) {
    .contact {
      font-size: 1.2rem;
    }
  }
`;

// const IconContainer = styled.div``;
