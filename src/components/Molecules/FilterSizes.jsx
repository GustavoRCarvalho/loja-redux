import FilterCard from "../Atoms/Catalog/FilterCard"
import { useSelector, useDispatch } from "react-redux"
import { updateFilters } from "../../store/filterSlice"
import { ButtonSize } from "../Atoms/Catalog/ButtonSize"

function Filter(data,dispatch,filtered) {
    return data.map((string, index) => {
        let selected = filtered.indexOf(string) > -1
        return (
            <ButtonSize
                title={string} 
                key={index} 
                onClick={() => dispatch(updateFilters(string))} 
                selected={selected}>

                {string}
                
            </ButtonSize>
        )
    })
}

export default function FilterSizes() {
    const { filtered, listFilters:{Sizes} } = useSelector(state => state.filters)
    const dispatch = useDispatch()
    
    return (
        Sizes &&
            <FilterCard title={Sizes.title}>
                {Filter(Sizes.data,dispatch,filtered)}
            </FilterCard>
    )
}