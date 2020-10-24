import Heading from "assets/heading";
import { Box, Flex } from "reflexbox";
import Card from "assets/card";
import { Recomendeds, Products, Product } from "types/types";
export default function Recomended({ recomendeds }: Recomendeds) {
  return (
    <Box>
      <Heading>Polecane</Heading>
      <Card product={recomendeds[3]} />
    </Box>
  );
}
