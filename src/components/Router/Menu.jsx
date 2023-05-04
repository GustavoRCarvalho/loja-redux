import { useSelector } from "react-redux"
import CartButton from "../Molecules/Cart/CartButton"
import MenuButtonMobile from "../Molecules/Menu/MenuButtonMobile"
import MenuDesktop from "../Organisms/MenuDesktop"

export default function Menu(props) {
  const { modalCart, modalMenu } = useSelector((state) => state.modal)

  return (
    <>
      {!modalMenu && <MenuButtonMobile />}
      <MenuDesktop />
      {!modalCart && <CartButton />}
    </>
  )
}
