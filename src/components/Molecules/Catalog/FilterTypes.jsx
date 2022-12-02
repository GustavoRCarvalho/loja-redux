import FilterCard from "../../Atoms/Catalog/FilterCard";
import { useSelector, useDispatch } from 'react-redux'
import ListTypes from "../ListTypes";

export default function FilterTypes() {
    const { filtered, listFilters:{Types} } = useSelector(state => state.filters)
    const dispatch = useDispatch()

    return (
        Types &&
            <FilterCard title={Types.title}>
                {ListTypes(Types.data,dispatch,filtered)}
            </FilterCard>
    )
}