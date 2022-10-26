import { useEffect, useState } from 'react'
import CatalogTemplate from '../Templates/CatalogTemplate'

import listOrder from "../../data/ListOrder"
import listProducts from "../../data/Products.json"
import listFilters from "../../data/ListFilters2.json"

export default function CatalogAll() {
    const filters = useState([])
    const [products, setproducts] = useState([])

    useEffect(()=>{
        console.log("filtro")
        //chama o filtro do back end
        setTimeout(() => setproducts(listProducts), 100)
    }, [filters])

    return (
        <CatalogTemplate listFilters={listFilters} filters={filters} listProducts={products} listOrder={listOrder}/>
    )
}