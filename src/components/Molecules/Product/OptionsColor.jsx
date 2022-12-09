import { useDispatch, useSelector } from "react-redux"
import Title from "../../Atoms/Product/Title"
import styled from "styled-components"
import { updateProductColor } from "../../../store/productSlice"
import { productData } from "../../Pages/Product"
import ListColor from "../ListsComponents/ListColors"

const FilterSelect = styled.div`
    padding-block: 1rem;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default function OptionsColor() {
    const { colors } = productData
    const {productOptions: {color}} = useSelector(state => state.product)
    const dispatch = useDispatch()
    
    return (
        <FilterSelect>
            <Title fontSize="1.5rem">
                {colors.title}
            </Title>
            <Container>
                {ListColor({
                    data: colors.data,
                    functionDispatch: (value) => {dispatch(updateProductColor(value))},
                    filtered: color
                    })}
            </Container>
        </FilterSelect>
    )
}