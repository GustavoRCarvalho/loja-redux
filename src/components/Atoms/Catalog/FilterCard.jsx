import styled from "styled-components"

const Card = styled.div`
    color: ${props => props.theme.primaryColor};
    background-color: #312E30;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    width: 14rem;
    margin-block: 1rem;

    @media screen and (min-width: ${props => props.theme.device.mobileMin}) and (max-width: ${props => props.theme.device.mobileMax}) {
        font-size: 0.8rem;
    }
`

const Item = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;    
    line-height: 24px;
    font-weight: ${({isTitle}) => isTitle ? "700" : "500"};
    font-size: ${({isTitle}) => isTitle ? "1.2em" : "1em"};
`

export default function FilterCard(props) {

    return (
        <Card>
            <Item isTitle>{props.title}</Item>
            <Item>{props.children}</Item>
        </Card>
    )
}