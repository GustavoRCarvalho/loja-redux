import { useSelector, useDispatch } from 'react-redux'
import FilterCard from "../../Atoms/Catalog/FilterCard";
import { updateFilters } from '../../../store/filterSlice';
import ListColor from '../ListsComponents/ListColors';

export default function FilterColors() {
    const { filtered, listFilters:{Colors} } = useSelector(state => state.filters)
    const dispatch = useDispatch()

    return (
        Colors &&
            <FilterCard title={Colors.title}>
                {ListColor(
                    Colors.data,
                    (value)=>{dispatch(updateFilters(value))},
                    filtered)}
            </FilterCard>
    )
}