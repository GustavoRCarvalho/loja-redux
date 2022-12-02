import { useDispatch, useSelector } from "react-redux"
import Title from "../../Atoms/Product/Title"
import styled from "styled-components"
import { updateProductSize } from "../../../store/productSlice"
import { productData } from "../../Pages/Product"
import ListSizes from "../ListSizes"

const FilterSelect = styled.div`
    padding-block: 1rem;
`

const Container = styled.div`
    display: flex;
    background-color: #312E30;
    border-radius: 0.3rem;
`

export default function OptionsSize() {
    const { sizes } = productData
    const {productOptions:{size}} = useSelector(state => state.product)
    const dispatch = useDispatch()

    return (
        <FilterSelect>
            <Title fontSize="1.5rem">
                {sizes.title}
            </Title>
            <Container>
                {ListSizes(
                    sizes.data,
                    (value) => dispatch(updateProductSize(value)),
                    size
                    )}
            </Container>
        </FilterSelect>
    )
}