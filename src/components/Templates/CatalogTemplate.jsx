import FilterOrder from "../Atoms/Catalog/OrderList"
import TemplateBackground from "../Atoms/TemplateBackground"
import FilterTypes from "../Molecules/Catalog/FilterTypes"
import FilterColors from "../Molecules/Catalog/FilterColors"
import FilterSizes from "../Molecules/Catalog/FilterSizes"
import Catalog from "../Organisms/Catalog"

import styled from "styled-components"
import FiltersButton from "../Atoms/Catalog/FiltersButton"

const ContainerFilters = styled.div`
    padding: 0.1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media screen 
        and (min-width: ${props => props.theme.device.laptopMin})
        and (max-width: ${props => props.theme.device.laptopMax}) {
        padding: 0rem;
    }
    @media screen 
        and (min-width: ${props => props.theme.device.mobileMin})
        and (max-width: ${props => props.theme.device.mobileMax}) {
        display: none;
    }
`

const Container = styled.div`
    padding: 0.1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media screen 
        and (min-width: ${props => props.theme.device.laptopMin})
        and (max-width: ${props => props.theme.device.laptopMax}) {
        padding: 0rem;
    }
`

const Template = styled(TemplateBackground)`
    @media screen 
        and (min-width: ${props => props.theme.device.mobileMin}) 
        and (max-width: ${props => props.theme.device.mobileMax}) {
        flex-direction: column;
        align-items: center;
    }
`

const ContainerButtons = styled.div`
    width: 65%;

    display: none;
    justify-content: center;

    @media screen 
        and (min-width: ${props => props.theme.device.mobileMin})
        and (max-width: ${props => props.theme.device.mobileMax}) {
        display: flex;
    }
`

export default function CatalogTemplate (props) {

    return (
        <Template>
            <ContainerButtons>
                <FiltersButton />
                <FiltersButton />
            </ContainerButtons>
            <ContainerFilters>
                <FilterTypes />
                <FilterColors />
                <FilterSizes />
            </ContainerFilters>
            <Container>
                <FilterOrder />
                <Catalog/>
            </Container>
        </Template>
    )
}