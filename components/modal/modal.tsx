import Modal from "react-modal";

Modal.setAppElement("#__next");
import { StyledModal, ModalInfo } from "./modal.css";
import Button from "assets/button";
import { Product } from "types/types";

type Props = {
  product: Product;
  openModal: boolean;
  inputValue: number;
  setOpenModal: (value: boolean) => void;
};

export default function AddToChartModal({
  product,
  openModal,
  inputValue,
  setOpenModal,
}: Props) {
  return (
    <StyledModal
      closeTimeoutMS={500}
      isOpen={openModal}
      onRequestClose={() => setOpenModal(false)}
      style={{ overlay: { background: "rgba(0,0,0,0.4)" } }}
    >
      <h3>Produkt został dodany do koszyka</h3>
      <ModalInfo>
        <div>
          <img src={product.photo.url} alt={product.title} />
          <p>
            {product.title}
            <br />
            <span>ilosc:</span> {inputValue}
          </p>
        </div>
        <div>
          <p>
            {(product.price * inputValue).toFixed(2)}
            zł
          </p>
          <Button href={"/cart"}>Pokaż koszyk</Button>
        </div>
      </ModalInfo>
    </StyledModal>
  );
}
