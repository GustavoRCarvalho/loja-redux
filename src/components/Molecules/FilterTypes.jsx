import FilterCard from "../Atoms/Product/FilterCard";
import styled from "styled-components";

const ButtonTypes = styled.span`
    color: ${props => props.selected ? props.theme.catalog.colorHover : "#fff"};
    transition: color 0.3s;

    cursor: pointer;

    :hover {
        color: ${props => props.selected ? "#7d182e" : props.theme.catalog.colorHover};
        transition: color 0.3s;
    }
`


function Filter(data,onClick,filters) {
    return data.map((string)=>{
        let selected = filters.indexOf(string) > -1
        return (
            <ButtonTypes key={string} onClick={()=>onClick(string)} selected={selected}>
                - {string}
            </ButtonTypes>
        )
    })
}

export default function FilterTypes({title,data,onClick,filters}) {
    return (
        <FilterCard title={title}>
            {Filter(data,onClick,filters)}
        </FilterCard>
    )
}