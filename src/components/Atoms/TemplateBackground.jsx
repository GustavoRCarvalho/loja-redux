import styled from "styled-components";

const Container = styled.div`
    background-color: ${props => props.theme.catalog.backgroudColor};
`

export default function TemplateBackground (props) {
    return <Container>
        {props.children}
    </Container>
}