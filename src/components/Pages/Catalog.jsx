import CatalogTemplate from "../Templates/CatalogTemplate"

import { ListOrder } from "../../data/ListOrder"
import { ListFilters } from "../../data/ListFilters"

import { useDispatch } from "react-redux"
import { setPageFilters, setPageOrder, reset } from "../../store/filterSlice"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Catalog() {
    const { catalog } = useParams()
    const dispatch = useDispatch()

    const filters = ListFilters(catalog)
    const listOrder = ListOrder(catalog)
    
    useEffect(()=>{
        dispatch(reset())
        dispatch(setPageFilters(filters))
        dispatch(setPageOrder(listOrder))
    })

    return (
        <CatalogTemplate/>
    )
}