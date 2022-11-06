import { useDispatch, useSelector } from "react-redux"
import Title from "../Atoms/Product/Title"
import styled from "styled-components"
import { ButtonColor } from "../Atoms/Catalog/ButtonColor"
import { updateProductColor } from "../../store/productSlice"
import { productData } from "../Pages/Product"

const FilterSelect = styled.div`
    padding-block: 1rem;
`

const Container = styled.div`
    display: flex;
`

function Options(data,dispatch,filtered) {
    return (
        data.map((obj,index) => {
            const listButtons = []
            let selected = obj === filtered

            for (const [key, value] of Object.entries(obj)){
                listButtons.push(
                    <ButtonColor 
                        key={index} 
                        color={value} 
                        title={key} 
                        onClick={() => dispatch(updateProductColor(obj))} 
                        selected={selected}/>
                )
            }
            return listButtons
        })
    )
}

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
                {Options(colors.data,dispatch,color)}
            </Container>
        </FilterSelect>
    )
}