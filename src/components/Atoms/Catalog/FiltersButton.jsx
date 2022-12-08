import styled from "styled-components"

const Button = styled.div`
    background-color: #222;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0.5rem;
    height: 2.5rem;
    width: 50%;

    cursor: pointer;
`

export default function FiltersButton() {
    
    return (
        <Button>
            FITLROS
        </Button>
    )
}