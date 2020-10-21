import Slider from "react-slick";
import { Flex, Box } from "reflexbox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderContainer, Img } from "./sliderComp.css";
import { Baners, CustomArrowProps } from "types/types";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Arrow = ({ onClick, className, site }: CustomArrowProps) => (
  <FontAwesomeIcon
    icon={site == "Left" ? faChevronLeft : faChevronRight}
    className={className}
    onClick={onClick}
  />
);

export default function SliderComponent({ baners }: Baners) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    prevArrow: <Arrow site="Left" />,
    nextArrow: <Arrow />,
  };

  return (
    <Box as={SliderContainer} mt="1rem">
      <Slider {...settings}>
        {baners.map((baner) => (
          <div key={baner.name}>
            <Link href={baner.slug}>
              <a>
                <Img src={process.env.API_URL + baner.photo.url} />
              </a>
            </Link>
          </div>
        ))}
      </Slider>
    </Box>
  );
}
