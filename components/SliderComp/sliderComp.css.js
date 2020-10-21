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
    width: 30px;
    height: 30px;
    color: #adadad;
    transition: 0.5s;
  }

  svg:hover {
    color: ${(props) => props.theme.colors.black};
  }
`;

export const Img = styled.img`
  width: 100%;
  max-height: 900px;
`;
