import { GetServerSideProps } from "next";
import { gql } from "@apollo/client";
import { apolloClient } from "../../services/strapi";
import { Product } from "types/types";
import Card from "assets/card";
import { Box, Flex } from "reflexbox";

import Heading from "assets/heading";
import { useState, useEffect } from "react";
import { FilterContainer, NoProduct } from "./origin.css";

type Result = {
  result: {
    name: string;
    title: string;
    products: Array<Product>;
  };
  max: number;
};

const selectOption = [
  "po nazwie rosnąco",
  "po nazwie malejąco",
  "po cenie rosnąco",
  "po cenie malejąco",
];

export default function Origin({ result, max }: Result) {
  const { products } = result;

  const [selectedValue, setSelectedValue] = useState(selectOption[0]);
  const [priceValue, setPriceValue] = useState(max);

  useEffect(() => {
    setPriceValue(max);
  }, [max]);

  const onChange = (e: any) => {
    if (e.target.id == "select") setSelectedValue(e.target.value);
    else setPriceValue(e.target.value);
  };

  function compare(a: Product, b: Product) {
    let pA: number | string = 0;
    let pB: number | string = 0;

    if (selectedValue === selectOption[0]) {
      pA = a.title;
      pB = b.title;
    } else if (selectedValue === selectOption[1]) {
      pA = b.title;
      pB = a.title;
    } else if (selectedValue === selectOption[2]) {
      pA = a.price;
      pB = b.price;
    } else if (selectedValue === selectOption[3]) {
      pA = b.price;
      pB = a.price;
    }

    let comparison = 0;
    if (pA > pB) {
      comparison = 1;
    } else if (pA < pB) {
      comparison = -1;
    }
    return comparison;
  }

  let filteredArray = products;
  filteredArray = filteredArray
    .slice()
    .filter((item) => item.price <= priceValue);
  filteredArray = filteredArray.sort(compare);

  return (
    <Box width={{ _: "100%", lg: "80%" }} as="main" margin="1rem auto">
      <Box width="80%" m="0 auto">
        <Heading small={true}>
          {result.title ? result.title : "Wynik wyszukiwania"}
        </Heading>
      </Box>
      {max !== 0 && (
        <FilterContainer>
          <div className="sort">
            Sortuj:
            <select id="select" value={selectedValue} onChange={onChange}>
              {selectOption.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="filter">
            cena maksymalna:
            <input
              id="range"
              type="range"
              step="1"
              min="50"
              max={max + 1}
              value={priceValue}
              onChange={onChange}
            />
            maks: {priceValue} pln
          </div>
        </FilterContainer>
      )}
      <Flex
        width="100%"
        flexWrap="wrap"
        justifyContent={{ _: "center", md: "start" }}
      >
        {filteredArray.length > 0 ? (
          filteredArray.map((product) => (
            <Box width={{ _: "80%", md: "33.3%" }} key={product.title}>
              <Card product={product} />
            </Box>
          ))
        ) : (
          <NoProduct>Brak danego produktu</NoProduct>
        )}
      </Flex>
    </Box>
  );
}

type Category = {
  name: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { origin } = context.query;

  const {
    data: { categories },
  } = await apolloClient.query({
    query: gql`
      {
        categories {
          name
        }
      }
    `,
  });

  let result = [];

  const cat: Array<Category> = categories;

  if (cat.find((category) => category.name === origin)) {
    const { data } = await apolloClient.query({
      query: gql`
      {
        categories(where: { name: "${origin}" }) {
          id
          name
          title
          products {
            title
            price
            id
            photo {
              url
            }
          }
        }
      }
    `,
    });
    result = data.categories;
  } else {
    const { data } = await apolloClient.query({
      query: gql`
      {
        products(where: { title: "${origin}" }) { 
          title
          price
          id
          photo {
            url
          }
        }
      }
    `,
    });
    result = [data];
  }

  let max = 0;

  if (result.length > 0) {
    result[0].products.forEach((product: Product) => {
      max < product.price ? (max = product.price) : null;
    });
  }

  return {
    props: {
      result: result.length > 0 ? result[0] : [],
      max: max,
    },
  };
};
