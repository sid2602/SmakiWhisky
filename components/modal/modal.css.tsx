import styled from "@emotion/styled";
import Modal from "react-modal";

export const StyledModal = styled(Modal)`
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: white;
  width: 900px;
  height: 250px;
  transform: translate(-50%, -50%);
  padding: 1rem 2rem;
  border: none;
  outline: none;
  text-align: center;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 400px;
    height: 590px;

    h3 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 400px) {
    width: 280px;
    height: 470px;

    h3 {
      font-size: 1rem;
    }
  }
`;

export const ModalInfo = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 1.2rem;
  line-height: 2rem;
  justify-content: space-around;
  div {
    display: flex;
    align-items: center;
    p {
      margin: 0 1rem;
    }
  }
  span {
    font-weight: bold;
  }

  img {
    height: 150px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;

    height: 100%;

    img {
      height: 250px;
      margin-bottom: 1rem;
    }

    div {
      flex-direction: column;
    }
  }

  @media (max-width: 400px) {
    justify-content: center;
    font-size: 0.8rem;
    img {
      height: 150px;
    }
  }
`;
