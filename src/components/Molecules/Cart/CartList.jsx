import styled from "styled-components";
import CartProduct from "./CartProduct";

const ListContainer = styled.div``;

export default function CartList({ listCart }) {
  function listProducts(listCart) {
    return listCart?.map((product, index) => {
      return <CartProduct product={product} key={index} />;
    });
  }

  return <ListContainer>{listProducts(listCart)}</ListContainer>;
}
