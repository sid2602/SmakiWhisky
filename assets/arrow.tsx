import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CustomArrowProps } from "types/types";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";

const Arrow = ({ onClick, className, site }: CustomArrowProps) => (
  <ArrowStyled>
    <FontAwesomeIcon
      icon={site == "Left" ? faChevronLeft : faChevronRight}
      className={className}
      onClick={onClick}
    />
  </ArrowStyled>
);

const ArrowStyled = styled.div`
  .slick-prev {
    left: -35px;
  }

  .slick-next {
    right: -35px;
  }
  svg {
    width: 30px !important;
    height: 30px;
    color: #adadad;
    transition: 0.5s;
  }

  svg:hover {
    color: ${(props: any) => props.theme.colors.black};
  }

  @media (max-width: 768px) {
    .slick-prev {
      left: -25px;
    }

    .slick-next {
      right: -25px;
    }

    svg {
      width: 20px !important;
      height: 20px;
    }
  }
`;

export default Arrow;
