import Catalog from "../Organisms/Catalog"
import FilterOrder from "../Atoms/Product/FilterOrder"
import TemplateBackground from "../Atoms/TemplateBackground"

export default function CatalogPage (props) {
    return (
        <TemplateBackground>
            <FilterOrder {...props}/>
            <Catalog {...props}/>
        </TemplateBackground>
    )
}