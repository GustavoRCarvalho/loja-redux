import { useSelector, useDispatch } from 'react-redux'
import FilterCard from "../Atoms/Catalog/FilterCard";
import { updateFilters } from '../../store/filterSlice';
import { ButtonColor } from '../Atoms/Catalog/ButtonColor';


function Filter(data,dispatch,filtered) {
    return data.map((obj,index) => {
        const listButtons = []
        for (const [key, value] of Object.entries(obj)){
            let selected = filtered.indexOf(key) > -1
            listButtons.push(
                <ButtonColor 
                    key={index} 
                    color={value} 
                    title={key} 
                    onClick={() => dispatch(updateFilters(key))} 
                    selected={selected}/>
            )
        }
        return listButtons
    })
}
export default function FilterColors({title,data}) {
    const { filtered, listFilters:{Colors} } = useSelector(state => state.filters)
    const dispatch = useDispatch()

    return (
        Colors &&
            <FilterCard title={Colors.title}>
                {Filter(Colors.data,dispatch,filtered)}
            </FilterCard>
    )
}