import styled from "styled-components"

const Button = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: #a7a7a7;
    border-radius: 0.1rem;
    
    display: flex;
    justify-content: center;
    align-items: center;

    color: black;

    :hover {
        background-color: ${props => props.theme.menu.activeBackgroundColor};
        color: white;
    }
    cursor: pointer;
`

export default function ButtonIcon(props) {

    return (
        <Button {...props}>
            {props.children}
        </Button>
    )
}