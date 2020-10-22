import styled from "@emotion/styled";

export const SliderContainer = styled.article`
  width: 100%;

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
    color: ${(props) => props.theme.colors.black};
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

export const Img = styled.img`
  width: 100%;
  max-height: 900px;
`;
