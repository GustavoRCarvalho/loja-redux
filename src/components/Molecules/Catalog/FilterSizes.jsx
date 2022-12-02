import FilterCard from "../../Atoms/Catalog/FilterCard"
import { useSelector, useDispatch } from "react-redux"
import ListSizes from "../ListSizes"
import { updateFilters } from "../../../store/filterSlice"

export default function FilterSizes() {
    const { filtered, listFilters:{Sizes} } = useSelector(state => state.filters)
    const dispatch = useDispatch()
    
    return (
        Sizes &&
            <FilterCard title={Sizes.title}>
                {ListSizes(Sizes.data,((value) => dispatch(updateFilters(value))),filtered)}
            </FilterCard>
    )
}