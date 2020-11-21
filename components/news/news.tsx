import { Flex, Box } from "reflexbox";
import { News } from "types/types";
import Heading from "assets/heading";
import Link from "next/link";
import { A } from "./news.css";
import Image from "assets/lazyImage";
export default function NewsComponent({ news }: News) {
  return (
    <>
      <Heading>Nowości</Heading>
      <Box width={{ _: 4 / 5, lg: 1 }} mx="auto" as="section">
        <Flex flexWrap="wrap" justifyContent="center">
          {news.map((item) => (
            <Box
              key={item.name}
              width={{ _: "100%", md: "45%" }}
              m="0.5rem"
              overflow="hidden"
            >
              <Link href={item.slug}>
                <A>
                  <Image src={item.photo.url} alt={item.name} />
                </A>
              </Link>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
}
