import Slider from "react-slick";
import { Box } from "reflexbox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Img } from "./sliderComp.css";
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
    <Box as="article" mt="1rem" width="100%" height="10%">
      <Slider {...settings}>
        {baners.map((baner) => (
          <div key={baner.name}>
            <Link href={baner.slug}>
              <a>
                <Img
                  src={process.env.API_URL + baner.photo.url}
                  height="534px"
                  width="1140px"
                  alt={baner.name}
                />
              </a>
            </Link>
          </div>
        ))}
      </Slider>
    </Box>
  );
}
