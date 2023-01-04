import CartButton from "../Molecules/Cart/CartButton";
import MenuButtonMobile from "../Molecules/Menu/MenuButtonMobile";
import MenuDesktop from "../Organisms/MenuDesktop";

export default function Menu(props) {
  return (
    <>
      <MenuButtonMobile />
      <MenuDesktop />
      <CartButton />
    </>
  );
}
