import { Box, Flex } from "reflexbox";
import Heading from "assets/heading";
import styled from "@emotion/styled";
import Summarry from "assets/sumarry";

export default function checkout() {
  return (
    <Box as="main" mx="auto" maxWidth={1200} width="100%" px={30}>
      <Heading>Kasa</Heading>
      <Flex
        as="section"
        justifyContent="center"
        alignItems="center"
        flexDirection={{ _: "column", md: "row" }}
      >
        <Form>
          <Heading3>Dane klienta</Heading3>
          <Input type="text" placeholder="Imie i nazwisko" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Adres" />
          <Flex justifyContent="space-between">
            <Input type="text" placeholder="Kod pocztowy" small={true} />
            <Input type="text" placeholder="Miasto" small={true} />
          </Flex>
          <Heading3>Sposób płatności</Heading3>
          <Select>
            <option>Paypal</option>
            <option>Karta kredytowa</option>
          </Select>
        </Form>
        <Box as={Sum}>
          <Summarry />
        </Box>
      </Flex>
    </Box>
  );
}

const Heading3 = styled.h3`
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;
const Input = styled.input`
  width: ${(props: any) => (props.small ? "48%" : "100%")};
  height: 50px;
  font-size: 1.5rem;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 2px solid ${(props: any) => props.theme.colors.gray};
  outline-color: ${(props: any) => props.theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Select = Input.withComponent("select");

const Sum = styled.section`
  border: 1px solid gray;
`;
