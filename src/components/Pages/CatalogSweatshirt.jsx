import CatalogTemplate from "../Templates/CatalogTemplate"

import listOrder from "../../data/ListOrder"
import listProducts from "../../data/Products.json"
import listFilters from "../../data/ListFilters1.json"

export default function CatalogPage (props) {
    return (
        <CatalogTemplate listProducts={listProducts} listOrder={listOrder} listFilters={listFilters}/>
    )
}