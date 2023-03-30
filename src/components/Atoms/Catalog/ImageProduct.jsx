import styled from "styled-components"

const Image = styled.img`
  width: 100%;
  height: 100%;
`

export default function ImageProduct(props) {
  return <Image {...props} />
}
