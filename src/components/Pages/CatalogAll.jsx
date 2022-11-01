import CatalogTemplate from "../Templates/CatalogTemplate"

import listOrder from "../../data/ListOrder"
import listFilters from "../../data/ListFilters2.json"
import productsGet from "../../data/Products"

import { useDispatch, useSelector } from "react-redux"
import { setPageFilters, setPageOrder } from "../../store/filterSlice"

export default function CatalogAll() {
    const {filtered} = useSelector(state => state.filters)

    const dispatch = useDispatch()

    dispatch(setPageFilters(listFilters))
    dispatch(setPageOrder(listOrder))

    const data = productsGet(filtered)

    return (
        <CatalogTemplate listProducts={data}/>
    )
}