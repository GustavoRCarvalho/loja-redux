import { useDispatch, useSelector } from "react-redux"
import Title from "../Atoms/Product/Title"
import styled from "styled-components"
import { ButtonSize } from "../Atoms/Catalog/ButtonSize"
import { updateProductSize } from "../../store/productSlice"
import { productData } from "../Pages/Product"

const FilterSelect = styled.div`
    padding-block: 1rem;
`

const Container = styled.div`
    display: flex;
    background-color: #312E30;
    border-radius: 0.3rem;
`

function Options(data,dispatch,filtered) {
    return (
        data.map((string,index) => {
            let selected = string === filtered
            
            return <ButtonSize 
                    title={string} 
                    key={index}
                    onClick={() => dispatch(updateProductSize(string))} 
                    selected={selected}>
                        {string}
                    </ButtonSize>
        })
    )
}

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
                {Options(sizes.data,dispatch,size)}
            </Container>
        </FilterSelect>
    )
}