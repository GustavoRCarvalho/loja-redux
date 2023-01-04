import { useDispatch } from "react-redux";
import styled from "styled-components";
import { modalMenu } from "../../store/modalSlice";
import ButtonUser from "../Atoms/Menu/ButtonUser";
import { ModalContainer } from "../Atoms/ModalContainer";
import ButtonClose from "../Atoms/Product/ButtonClose";
import MenuNav from "../Molecules/Menu/MenuNav";

const CloseLine = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0.4rem;
`;

const MenuMobile = styled(MenuNav)`
  @media screen and (min-width: ${(props) =>
      props.theme.device.mobileMin}) and (max-width: ${(props) =>
      props.theme.device.mobileMax}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    background-color: transparent;

    height: auto;
    padding: 0.4rem;
    display: flex;
  }
`;

export default function MenuModal() {
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(modalMenu());
  }

  return (
    <ModalContainer>
      <CloseLine>
        <ButtonClose onClick={() => handleClose()} />
        <ButtonUser />
      </CloseLine>
      <MenuMobile />
    </ModalContainer>
  );
}
