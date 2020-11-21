import Slider from "react-slick";
import { Box } from "reflexbox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { A } from "./sliderComp.css";
import { Baners } from "types/types";
import Link from "next/link";
import Arrow from "assets/arrow";

export default function SliderComponent({ baners }: Baners) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    prevArrow: <Arrow site="Left" />,
    nextArrow: <Arrow />,
  };

  return (
    <Box
      as="section"
      mt="1rem"
      width="100%"
      minHeight={{ _: "120px", md: "300px", lg: "400px", xl: "500px" }}
    >
      <Slider {...settings}>
        {baners.map((baner) => (
          <Box key={baner.name}>
            <Link href={baner.slug}>
              <A>
                <img src={baner.photo.url} alt={baner.name} />
              </A>
            </Link>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
