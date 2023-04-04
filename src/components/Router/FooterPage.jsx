import styled from "styled-components"
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai"

const IconLinkedin = styled(AiOutlineLinkedin)`
  height: 2rem;
  width: 2rem;
`

const IconGitHub = styled(AiOutlineGithub)`
  height: 2rem;
  width: 2rem;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  margin-top: auto;
`

const FooterContainerBackground = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  background-color: ${(props) => props.color ?? "#3b3a38"};
`

const FooterContainer = styled.div`
  min-height: 50px;
  width: ${(props) => {
    return props.theme.device.desktopMin
  }};
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

const FooterText = styled.div`
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

const LinkContact = styled.a`
  margin-left: 10px;
  color: inherit;
`

export default function FooterPage(props) {
  return (
    <Footer>
      <FooterContainerBackground color="#f7f7f7">
        <FooterContainer>
          <FooterText color="#666">LOGO</FooterText>
          <div>
            <FooterText color="#666">
              EMPRESA SA - CNPJ 0000.0000.0000-00
            </FooterText>
            <FooterText color="#666">
              Av Endereço False, 0000 - Cidade/CD - CEP: 00000-000
            </FooterText>
          </div>
          <div>
            <FooterText color="#666">WhatsApp: (00) 0000.0000</FooterText>
            <FooterText color="#666">Seg à sexta das 08h às 17h.</FooterText>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/gustavo-carvalho-0/">
              <IconLinkedin color="#666" />
            </a>
            <a href="https://github.com/GustavoRCarvalho">
              <IconGitHub color="#666" />
            </a>
          </div>
        </FooterContainer>
      </FooterContainerBackground>
      <FooterContainerBackground>
        <FooterContainer>
          <FooterText>
            © 2023 - Um Total de 0 (Zero) direitos reservados. Conteúdo sem
            qualquer licitação.
          </FooterText>
          <FooterText>
            Site desenvolvido por
            <LinkContact href="https://www.linkedin.com/in/gustavo-carvalho-0/">
              Gustavo Rafael de Carvalho
            </LinkContact>
          </FooterText>
        </FooterContainer>
      </FooterContainerBackground>
    </Footer>
  )
}
