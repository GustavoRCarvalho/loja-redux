import styled from "styled-components"

export const ModalContainer = styled.div`
  background-color: ${(props) => props.theme.menu.modalBackgroundColor};

  height: 100%;
  width: 80%;

  position: absolute;
  overflow: overlay;
`
