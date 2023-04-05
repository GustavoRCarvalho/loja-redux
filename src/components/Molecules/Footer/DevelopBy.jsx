import styled from "styled-components"
import { FooterContainerBackground } from "../../Atoms/Footer/FooterBackground"
import { FooterContainer } from "../../Atoms/Footer/FooterContainer"
import { FooterText } from "../../Atoms/Footer/FooterText"

const LinkContact = styled.a`
  margin-left: 10px;
  color: inherit;
`

export default function DevelopBy() {
  return (
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
  )
}
