import CatalogTemplate from '../Templates/CatalogTemplate'

import listOrder from "../../data/ListOrder"
import listProducts from "../../data/Products.json"
import listFilters from "../../data/ListFilters2.json"

export default function CatalogAll() {
    // useEffect(()=>{
    //     console.log("filtro")
        //chama o filtro do back end
    //     setTimeout(() => setproducts(listProducts), 100)
    // }, [filters])

    console.log("Recarregou page")

    return (
        <CatalogTemplate listFilters={listFilters} listProducts={listProducts} listOrder={listOrder}/>
    )
}