import FilterCard from "../../Atoms/Catalog/FilterCard";
import { useSelector, useDispatch } from 'react-redux'
import ListTypes from "../ListsComponents/ListTypes";
import { updateFilters } from "../../../store/filterSlice";

export default function FilterTypes() {
    const { filtered, listFilters:{Types} } = useSelector(state => state.filters)
    const dispatch = useDispatch()

    return (
        Types &&
            <FilterCard title={Types.title}>
                {ListTypes({
                    data: Types.data,
                    functionDipatch: (value)=>dispatch(updateFilters(value)),
                    filtered: filtered
                })}
            </FilterCard>
    )
}