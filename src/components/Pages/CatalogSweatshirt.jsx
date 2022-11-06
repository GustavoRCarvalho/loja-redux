import CatalogTemplate from "../Templates/CatalogTemplate"

import listOrder from "../../data/ListOrder"
import listFilters from "../../data/ListFilters1.json"

import { useDispatch } from "react-redux"
import { setPageFilters, setPageOrder, reset } from "../../store/filterSlice"
import { useEffect } from "react"

export default function CatalogSweatshirt() {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(reset())
        dispatch(setPageFilters(listFilters))
        dispatch(setPageOrder(listOrder))
    })

    return (
        <CatalogTemplate />
    )
}