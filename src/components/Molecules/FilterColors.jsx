import FilterCard from "../Atoms/Product/FilterCard";
import styled from "styled-components";

const ButtonColor = styled.div`
    background-color: ${props => props.color};
    width: 3rem;
    height: 3rem;
    margin: 0.1rem;

    cursor: pointer;

    border: white solid 0.1rem;
    transition: border 0.3s;

    :hover {
        border: black solid 0.1rem;
        transition: border 0.3s;
    }
`

function Filter(data) {
    return data.map((obj,index) => {
        const listButtons = []
        for (const [key, value] of Object.entries(obj)){
            listButtons.push(<ButtonColor key={index} color={value} title={key}/>)
        }
        return listButtons
    })
}

export default function FilterColors({title,data}) {
    return (
        <FilterCard title={title}>
            {Filter(data)}
        </FilterCard>
    )
}