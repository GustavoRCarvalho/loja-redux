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
    const [filters, setFilters] = props.filters

    function onClickFilter(string) {
        setFilters(current => {
            let newList = [...current]
            let index = newList.indexOf(string)
            if (index > -1) {
                newList.splice(index, 1);
            } else {
                newList = [...newList, string]
            }
            return newList;
        })
    }

    return (
        <TemplateBackground>
            <Container>
                {props.listFilters.Types && <FilterTypes {...props.listFilters.Types} onClick={onClickFilter} filters={filters}/>}
                {props.listFilters.Colors && <FilterColors {...props.listFilters.Colors} onClick={onClickFilter} filters={filters}/>}
                {props.listFilters.Sizes && <FilterSizes {...props.listFilters.Sizes} onClick={onClickFilter} filters={filters}/>}
            </Container>
            <Container>
                {props.listOrder && <FilterOrder {...props.listOrder}/>}
                <Catalog {...props.listProducts}/>
            </Container>
        </TemplateBackground>
    )
}