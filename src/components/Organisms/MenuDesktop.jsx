import styled from "styled-components"
import ButtonUser from "../Atoms/Menu/ButtonUser"
import MenuNav from "../Molecules/Menu/MenuNav"

const ContainerMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: ${(props) =>
      props.theme.device.mobileMin}) and (max-width: ${(props) =>
      props.theme.device.mobileMax}) {
    display: none;
  }
`

export default function MenuDesktop() {
  return (
    <ContainerMenu>
      <div>LOGO</div>
      <MenuNav />
      <ButtonUser />
    </ContainerMenu>
  )
}
