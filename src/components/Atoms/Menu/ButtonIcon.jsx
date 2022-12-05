import styled from "styled-components"

const Button = styled.div`
    width: 2rem;
    height: 2rem;
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

`

export default function ButtonIcon(props) {

    return (
        <Button {...props}>
            {props.children}
        </Button>
    )
}