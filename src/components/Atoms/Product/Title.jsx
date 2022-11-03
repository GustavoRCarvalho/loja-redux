import styled from "styled-components";

const TitleComponent = styled.title`
    color: ${props => props.theme.primaryColor};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 600};
    font-size: ${props => props.fontSize ? props.fontSize : "2rem"};
    display: block;
`

export default function Title (props) {

    return (
        <TitleComponent hover={props.hover} {...props}>
            {props.children}
        </TitleComponent>
    )
}