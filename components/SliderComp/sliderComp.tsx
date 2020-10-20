import Slider from "react-slick";
import { Flex, Box } from "reflexbox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderContainer, Img } from "./sliderComp.css";
import { Baners } from "types/types";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function SliderComponent({ baners }: Baners) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
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

        {/* <div>
          <Link href="#">
            <a>
              <Img src={process.env.API_URL + baners[0].photo.url} />
            </a>
          </Link>
        </div>
        <div>
          <Img src={process.env.API_URL + baners[1].photo.url} />
        </div> */}
      </Slider>
    </Box>
  );
}
