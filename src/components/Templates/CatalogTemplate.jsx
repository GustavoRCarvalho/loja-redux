import Catalog from "../Organisms/Catalog"
import FilterOrder from "../Atoms/Product/OrderList"
import TemplateBackground from "../Atoms/TemplateBackground"
import styled from "styled-components"
import FilterTypes from "../Molecules/FilterTypes"
import FilterColors from "../Molecules/FilterColors"

const Container = styled.div`
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export default function CatalogPage (props) {
    return (
        <TemplateBackground>
            <Container>
                {props.listFilters.Types && <FilterTypes {...props.listFilters.Types}/>}
                {props.listFilters.Colors && <FilterColors {...props.listFilters.Colors}/>}
            </Container>
            <Container>
                <FilterOrder {...props.listOrder}/>
                <Catalog {...props.listProducts}/>
            </Container>
        </TemplateBackground>
    )
}