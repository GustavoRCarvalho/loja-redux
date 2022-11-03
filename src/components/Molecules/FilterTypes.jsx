import FilterCard from "../Atoms/Catalog/FilterCard";
import { updateFilters } from "../../store/filterSlice";
import { useSelector, useDispatch } from 'react-redux'
import { ButtonType } from "../Atoms/Catalog/ButonType";

function Filter(data,dispatch,filtered) {
    return data.map((string)=>{
        let selected = filtered.indexOf(string) > -1
        return (
            <ButtonType
                key={string} 
                onClick={()=>dispatch(updateFilters(string))} 
                selected={selected}>

                - {string}
                
            </ButtonType>
        )
    })
}

export default function FilterTypes() {
    const { filtered, listFilters:{Types} } = useSelector(state => state.filters)
    const dispatch = useDispatch()

    return (
        Types &&
            <FilterCard title={Types.title}>
                {Filter(Types.data,dispatch,filtered)}
            </FilterCard>
    )
}