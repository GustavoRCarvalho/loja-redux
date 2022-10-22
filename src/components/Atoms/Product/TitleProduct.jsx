import styled from "styled-components";

const Title = styled.title`
    color: ${props => props.hover ? props.theme.catalog.colorHover : props.theme.catalog.color};
    font-weight: ${props => props.theme.catalog.fontWeight};
    font-size: ${props => props.theme.catalog.fontSize};
    display: block;
`

export default function TitleProduct (props) {

    return (
        <Title hover={props.hover}>
            {props.children}
        </Title>
    )
}