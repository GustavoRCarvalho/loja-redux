import FilterOrder from "../Atoms/Product/OrderList"
import TemplateBackground from "../Atoms/TemplateBackground"
import FilterTypes from "../Molecules/FilterTypes"
import FilterColors from "../Molecules/FilterColors"
import FilterSizes from "../Molecules/FilterSizes"
import Catalog from "../Organisms/Catalog"

import styled from "styled-components"

const Container = styled.div`
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export default function CatalogTemplate (props) {
    console.log("Recarregou template")

    return (
        <TemplateBackground>
            <Container>
                {props.listFilters.Types && <FilterTypes {...props.listFilters.Types}/>}
                {props.listFilters.Colors && <FilterColors {...props.listFilters.Colors}/>}
                {props.listFilters.Sizes && <FilterSizes {...props.listFilters.Sizes}/>}
            </Container>
            <Container>
                {props.listOrder && <FilterOrder {...props.listOrder}/>}
                <Catalog {...props.listProducts}/>
            </Container>
        </TemplateBackground>
    )
}