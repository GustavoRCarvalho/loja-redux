import styled from "styled-components"

const Footer = styled.footer`
  display: flex;
  justify-content: center;

  margin-top: auto;

  background-color: #3b3a38;
`

const FooterContainer = styled.div`
  height: 50px;
  width: ${(props) => {
    return props.theme.device.desktopMin
  }};
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

const FooterText = styled.div`
  color: #dddddd;
  font-size: 0.8em;
  display: block;

  @media screen and (min-width: ${(props) =>
      props.theme.device.mobileMin}) and (max-width: ${(props) =>
      props.theme.device.mobileMax}) {
    text-align: center;
  }
`

const LinkContact = styled.a`
  margin-left: 10px;
  color: inherit;
`

export default function Title(props) {
  return (
    <Footer>
      <FooterContainer>
        <FooterText>
          © 2023 - Um Total de 0 (Zero) direitos reservados. Conteúdo sem
          qualquer licitação.
        </FooterText>
        <FooterText>
          Site desenvolvido por
          <LinkContact href="https://github.com/GustavoRCarvalho">
            Gustavo Rafael de Carvalho
          </LinkContact>
        </FooterText>
      </FooterContainer>
    </Footer>
  )
}
