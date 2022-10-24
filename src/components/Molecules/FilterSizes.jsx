import styled from "styled-components"
import FilterCard from "../Atoms/Product/FilterCard"

const ButtonSizes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.5rem;
    height: 2.5rem;
    margin: 0.5rem;
    border-radius: 0.2rem;

    cursor: pointer;

    color: white;
    background-color: black;
    transition: background-color 0.3s, color 0.3s;

    :hover {
        color: black;
        background-color: yellow;
        transition: background-color 0.3s, color 0.3s;
    }
`

function Filter(data) {
    return data.map((string, index) => {
        return (
            <ButtonSizes title={string} key={index}>
                {string}
            </ButtonSizes>
        )
    })
}

export default function FilterSizes({title, data}) {
    return (
        <FilterCard title={title}>
            {Filter(data)}
        </FilterCard>
    )
}