import styled from "styled-components"
import Contact from "../Molecules/Footer/Contact"
import DevelopBy from "../Molecules/Footer/DevelopBy"
import PaymentMethods from "../Molecules/Footer/PaymentMethods"

const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  margin-top: auto;
`

export default function FooterPage(props) {
  return (
    <Footer>
      <PaymentMethods />
      <Contact />
      <DevelopBy />
    </Footer>
  )
}
