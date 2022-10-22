import CatalogTemplate from "../Templates/CatalogTemplate"

import listOrder from "../../data/ListOrder"
import Products from "../../data/Products.json"

export default function CatalogPage (props) {
    return (
        <CatalogTemplate data={Products} listOrder={listOrder}/>
    )
}