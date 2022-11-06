import TemplateBackground from "../Atoms/TemplateBackground"

import ImagesListProduct from "../Molecules/ImagesListProduct"
import ProductInfos from "../Organisms/ProductInfos"

export default function ProductTemplate () {

    return (
        <TemplateBackground>
            <ImagesListProduct />
            <ProductInfos />
        </TemplateBackground>
    )
}