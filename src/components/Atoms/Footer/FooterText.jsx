import styled from "styled-components"

export const FooterText = styled.div`
  color: ${(props) => props.color ?? "#dddddd"};
  font-size: 0.8em;
  padding: 0.2em 0 0.2em 0;
  display: block;

  @media screen and (min-width: ${(props) =>
      props.theme.device.mobileMin}) and (max-width: ${(props) =>
      props.theme.device.mobileMax}) {
    text-align: center;
  }
`
