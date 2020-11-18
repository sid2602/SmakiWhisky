import { Box, Flex } from "reflexbox";
import Heading from "assets/heading";
import styled from "@emotion/styled";
import Summarry from "assets/sumarry";
import { Formik } from "formik";
import Button from "assets/button";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useDispatchCart } from "components/cart";
const Schema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Za krótkie imie i nazwisko")
    .required("Imie i nazwisko są wymagane"),
  email: Yup.string()
    .min(4, "Za krótki email")
    .required("Email jest wymagany")
    .email("Błedny email"),
  adres: Yup.string().min(4, "Za krótki adres").required("Adres jest wymagany"),
  code: Yup.string()
    .min(2, "Za krótki kod")
    .required("Kod pocztowy jest wymagany"),
  city: Yup.string().min(4, "Za krótkie").required("Miejscowosc jest wymagana"),
  payment: Yup.string()
    .min(4, "Za krótkie")
    .required("Sposób płatności jest wymagany"),
});

export default function checkout() {
  const router = useRouter();
  const dispatch = useDispatchCart();
  return (
    <Box as="main" mx="auto" maxWidth={1200} width="100%" px={30}>
      <Heading>Kasa</Heading>

      <Formik
        initialValues={{
          email: "",
          name: "",
          adres: "",
          code: "",
          city: "",
          payment: "Paypal",
        }}
        validationSchema={Schema}
        onSubmit={() => {
          dispatch({ type: "REMOVEALL" });
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Flex
              justifyContent="center"
              alignItems="center"
              flexDirection={{ _: "column", xl: "row" }}
            >
              <Wrapper>
                <Heading3>Dane klienta</Heading3>
                <Input
                  type="text"
                  placeholder="Imie i nazwisko"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name && <Error>{errors.name}</Error>}
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <Error>{errors.email}</Error>}
                <Input
                  type="text"
                  placeholder="Adres"
                  name="adres"
                  value={values.adres}
                  onChange={handleChange}
                />
                {errors.adres && <Error>{errors.adres}</Error>}
                <Flex justifyContent="space-between">
                  <Input
                    type="text"
                    placeholder="Kod pocztowy"
                    small={true}
                    name="code"
                    value={values.code}
                    onChange={handleChange}
                  />

                  <Input
                    type="text"
                    placeholder="Miasto"
                    small={true}
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                  />
                </Flex>
                {errors.code && <Error>{errors.code}</Error>}
                {errors.city && <Error>{errors.city}</Error>}
                <Heading3>Sposób płatności</Heading3>
                <Select name="payment" onChange={handleChange}>
                  <option value="Paypal">Paypal</option>
                  <option value="CreditCard">Karta kredytowa</option>
                </Select>
                {errors.payment && <Error>{errors.payment}</Error>}
              </Wrapper>

              <Box as="section" textAlign="center" padding="2rem 0">
                <Box as={Sum}>
                  <Summarry />
                </Box>
                <Button submit={true}>Zapłać teraz</Button>
              </Box>
            </Flex>
          </form>
        )}
      </Formik>
    </Box>
  );
}

const Heading3 = styled.h3`
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Wrapper = styled.div`
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

const Sum = styled.div`
  border: 1px solid gray;
`;

const Error = styled.p`
  color: red;
`;
