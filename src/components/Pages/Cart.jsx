import { useDispatch } from "react-redux";
import { modalCart } from "../../store/modalSlice";
import { BackgroundModal } from "../Atoms/BackgroundModal";
import CartModal from "../Organisms/CartModal";

export default function Cart() {
  const dispatch = useDispatch();

  function handleClose(id) {
    if (id === "modalCart") {
      dispatch(modalCart());
    }
  }

  return (
    <BackgroundModal
      id="modalCart"
      onClick={({ target: { id } }) => {
        handleClose(id);
      }}
    >
      <CartModal />
    </BackgroundModal>
  );
}
