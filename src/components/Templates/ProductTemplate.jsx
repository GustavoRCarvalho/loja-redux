import TemplateBackground from "../Atoms/TemplateBackground"

import ImagesProduct from "../Molecules/Product/ImagesProduct"
import ProductInfos from "../Organisms/ProductInfos"

export default function ProductTemplate () {

    return (
        <TemplateBackground>
            <ImagesProduct />
            <ProductInfos />
        </TemplateBackground>
    )
}