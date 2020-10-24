import styled from "@emotion/styled";
import {
  faTruck,
  faDollarSign,
  faUndoAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Box, Flex } from "reflexbox";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const advOption = [
  { icon: faTruck, text: "Szybka wysyłka" },
  { icon: faDollarSign, text: "Darmowa dostawa od 400zł" },
  { icon: faUndoAlt, text: "Zwrot towaru do 14 dni" },
];

export default function Advantages() {
  return (
    <Flex
      flexDirection={{ _: "column", md: "row" }}
      justifyContent="space-between"
    >
      {advOption.map((item) => (
        <Box width={{ _: "100%", md: "30%" }} key={item.text}>
          <AdvantageStyle>
            <FontAwesomeIcon icon={item.icon} />
            <p>{item.text}</p>
          </AdvantageStyle>
        </Box>
      ))}
    </Flex>
  );
}

const AdvantageStyle = styled.div`
  margin: 3rem auto;
  line-height: 1.4;
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  color: ${(props: any) => props.theme.colors.gray};
  max-width: 250px;
  svg {
    font-size: 4rem;
    color: ${(props: any) => props.theme.colors.primaryLight};
  }
`;
