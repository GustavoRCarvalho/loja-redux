import FilterCard from "../Atoms/Product/FilterCard";
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
            <ButtonTypes key={string}>
                - {string}
            </ButtonTypes>
        )
    })
}

export default function FilterTypes({title,data}) {

    return (
        <FilterCard title={title}>
            {Filter(data)}
        </FilterCard>
    )
}