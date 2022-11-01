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

    return (
        <TemplateBackground>
            <Container>
                <FilterTypes />
                <FilterColors />
                <FilterSizes />
            </Container>
            <Container>
                <FilterOrder />
                <Catalog {...props.listProducts}/>
            </Container>
        </TemplateBackground>
    )
}