import styled from "styled-components"

const Card = styled.div`
    color: ${props => props.theme.primaryColor};
    background-color: #312E30;
    display: flex;
    flex-direction: column;    
    border-radius: 3px;
    width:13rem;
    min-width: 14rem;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;    
    line-height: 24px;
    font-weight: ${({isTitle}) => isTitle ? "700" : "500"};
    font-size: ${({isTitle}) => isTitle ? "1.13rem" : "1rem"};
`

export default function FilterCard(props) {

    return (
        <Card>
            <Item isTitle={true}>{props.title}</Item>
            <Item>{props.children}</Item>
        </Card>
    )
}