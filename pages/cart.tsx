import { useCart } from "components/cart/index";

export default function Cart() {
  const products = useCart();
  console.log(products);

  return <>Cart</>;
}
