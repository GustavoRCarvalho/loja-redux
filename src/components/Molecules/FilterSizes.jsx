import styled from "styled-components"
import FilterCard from "../Atoms/Product/FilterCard"
import { useSelector, useDispatch } from "react-redux"
import { updateFilters } from "../../store/filterSlice"

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

function Filter(data,dispatch,filtered) {
    return data.map((string, index) => {
        let selected = filtered.indexOf(string) > -1
        return (
            <ButtonSizes 
                title={string} 
                key={index} 
                onClick={() => dispatch(updateFilters(string))} 
                selected={selected}>

                {string}
                
            </ButtonSizes>
        )
    })
}

export default function FilterSizes({title,data}) {
    const { filtered } = useSelector(state => state.filters)
    const dispatch = useDispatch()
    
    return (
        <FilterCard title={title}>
            {Filter(data,dispatch,filtered)}
        </FilterCard>
    )
}