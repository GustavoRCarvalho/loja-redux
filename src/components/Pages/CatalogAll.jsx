import CatalogTemplate from '../Templates/CatalogTemplate'

import listOrder from "../../data/ListOrder"
import listProducts from "../../data/Products.json"
import listFilters from "../../data/ListFilters1.json"

export default function CatalogAll() {
    return (
        <CatalogTemplate listFilters={listFilters} listProducts={listProducts} listOrder={listOrder}/>
    )
}