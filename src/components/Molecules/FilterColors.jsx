import FilterCard from "../Atoms/Product/FilterCard";
import styled from "styled-components";

const ButtonColor = styled.div`
    color: #fff;
`

function Filter(data) {
    return data.map(function (obj,index) {
        for (const [key, value] of Object.entries(obj)){
            return <ButtonColor key={index}>
                {key} - {value}
            </ButtonColor>
        }
    })
}

export default function FilterColors({title,data}) {
    return (
        <FilterCard title={title}>
            {Filter(data)}
        </FilterCard>
    )
}