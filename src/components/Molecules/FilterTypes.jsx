import FilterCard from "../Atoms/Product/FilterCard";
import Filters from "../../data/ListFilters.json"
import styled from "styled-components";

const ButtonTypes = styled.span`
    color: #fff;

    :hover {
        color: ${props => props.theme.catalog.colorHover};
        cursor: pointer;
    }
`

function Filter(data) {
    return data.map((string)=>{
        return (
            <ButtonTypes key={string} style={{}}>
                {string}
            </ButtonTypes>
        )
    })
}

export default function FilterTypes() {

    return (
        <FilterCard title="Todos Moletons">
            {Filter(Filters.Types)}
        </FilterCard>
    )
}