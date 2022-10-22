import Catalog from "../Organisms/Catalog"
import FilterOrder from "../Atoms/Product/OrderList"
import TemplateBackground from "../Atoms/TemplateBackground"
import styled from "styled-components"
import FilterTypes from "../Molecules/FilterTypes"

const Container = styled.div`
    min-width: 15%;
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export default function CatalogPage (props) {
    return (
        <TemplateBackground>
            <Container>
                <FilterTypes />
            </Container>
            <Container>
                <FilterOrder {...props}/>
                <Catalog {...props}/>
            </Container>
        </TemplateBackground>
    )
}