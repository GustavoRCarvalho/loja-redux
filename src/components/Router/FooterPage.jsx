import styled from "styled-components"
import Contact from "../Molecules/Footer/Contact"
import DevelopBy from "../Molecules/Footer/DevelopBy"

const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  margin-top: auto;
`

export default function FooterPage(props) {
  return (
    <Footer>
      <Contact />
      <DevelopBy />
    </Footer>
  )
}
