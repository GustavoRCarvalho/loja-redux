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

    color: ${props => props.selected ? "black" : "white"};;
    background-color: ${props => props.selected ? "yellow" : "black"};
    transition: background-color 0.3s, color 0.3s;

    :hover {
        color: black;
        background-color: ${props => props.selected ? "#b0b000" : "yellow"};
        transition: background-color 0.3s, color 0.3s;
    }
`

function Filter(data,onClick,filters) {
    return data.map((string, index) => {
        let selected = filters.indexOf(string) > -1
        return (
            <ButtonSizes title={string} key={index} onClick={()=>onClick(string)} selected={selected}>
                {string}
            </ButtonSizes>
        )
    })
}

export default function FilterSizes({title,data,onClick,filters}) {
    
    return (
        <FilterCard title={title}>
            {Filter(data,onClick,filters)}
        </FilterCard>
    )
}