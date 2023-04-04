import { AiOutlineUser } from "react-icons/ai"
import styled from "styled-components"

const AccountIcon = styled(AiOutlineUser)`
  background-color: ${(props) => props.theme.card};

  width: 1.5rem;
  height: 1.5rem;
  padding: 0.5rem;
  margin: 0.1rem;

  border-radius: 4rem;

  cursor: pointer;
`

export default function ButtonUser() {
  return <AccountIcon />
}
