import CatalogTemplate from "../Templates/CatalogTemplate"

import ListOrder from "../../data/ListOrder"
import Products from "../../data/Products.json"
import Filters from "../../data/ListFilters1.json"

export default function CatalogPage (props) {
    return (
        <CatalogTemplate listProducts={Products} listOrder={ListOrder} listFilters={Filters}/>
    )
}