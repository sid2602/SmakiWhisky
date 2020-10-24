import Heading from "assets/heading";
import { Box, Flex } from "reflexbox";
import Card from "assets/card";
import { Recomendeds } from "types/types";
import Slider from "react-slick";
import Arrow from "assets/arrow";

export default function Recomended({ recomendeds }: Recomendeds) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    prevArrow: <Arrow site="Left" />,
    nextArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box>
      <Heading>Polecane</Heading>
      <Slider {...settings}>
        {recomendeds.map((item) => (
          <Card key={item.title} product={item} />
        ))}
      </Slider>
    </Box>
  );
}
