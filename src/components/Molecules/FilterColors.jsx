import FilterCard from "../Atoms/Product/FilterCard";
import styled from "styled-components";

const ButtonColor = styled.div`
    background-color: ${props => props.color};
    width: 3rem;
    height: 3rem;
    margin: 0.1rem;

    cursor: pointer;

   
    border: ${props => props.selected ? props.theme.catalog.colorHover : "#fff"} solid 0.15rem;
    transition: border 0.3s;

    :hover {
        border: black solid 0.15rem;
        transition: border 0.3s;
    }
`


function Filter(data,onClick,filters) {
    return data.map((obj,index) => {
        const listButtons = []
        for (const [key, value] of Object.entries(obj)){
            let selected = filters.indexOf(key) > -1
            listButtons.push(<ButtonColor key={index} color={value} title={key} onClick={()=>onClick(key)} selected={selected}/>)
        }
        return listButtons
    })
}
export default function FilterColors({title,data,onClick,filters}) {


    return (
        <FilterCard title={title}>
            {Filter(data,onClick,filters)}
        </FilterCard>
    )
}