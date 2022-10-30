import FilterCard from "../Atoms/Product/FilterCard";
import styled from "styled-components";
import { updateFilters } from "../../store/filterSlice";
import { useSelector, useDispatch } from 'react-redux'

const ButtonTypes = styled.span`
    color: ${props => props.selected ? props.theme.catalog.colorHover : "#fff"};
    transition: color 0.3s;

    cursor: pointer;

    :hover {
        color: ${props => props.selected ? "#7d182e" : props.theme.catalog.colorHover};
        transition: color 0.3s;
    }
`

function Filter(data,dispatch,filtered) {
    return data.map((string)=>{
        let selected = filtered.indexOf(string) > -1
        return (
            <ButtonTypes 
                key={string} 
                onClick={()=>dispatch(updateFilters(string))} 
                selected={selected}>

                - {string}
                
            </ButtonTypes>
        )
    })
}

export default function FilterTypes({title,data}) {
    const { filtered } = useSelector(state => state.filters)
    const dispatch = useDispatch()

    console.log("Recarregou filter types")

    return (
        <FilterCard title={title}>
            {Filter(data,dispatch,filtered)}
        </FilterCard>
    )
}