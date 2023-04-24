import styled from "styled-components"

export const FooterContainer = styled.div`
  min-height: 50px;
  width: 100%;
  max-width: ${(props) => props.theme.device.desktopMin};
  padding: 0.5em 0 0.5em 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: ${(props) =>
      props.theme.device.mobileMin}) and (max-width: ${(props) =>
      props.theme.device.mobileMax}) {
    flex-direction: column;
    justify-content: space-around;
  }
`
