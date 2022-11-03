import { useDispatch, useSelector } from "react-redux"
import Title from "../Atoms/Product/Title"
import styled from "styled-components"
import { ButtonColor } from "../Atoms/Catalog/ButtonColor"
import { updateProductColor } from "../../store/productSlice"

const FilterSelect = styled.div`
    padding: 1rem;
`

const Container = styled.div`
    display: flex;
    background-color: #312E30;
    border-radius: 0.3rem;
`

function Options(data,dispatch,filtered) {
    return (
        <Container>
            {
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
        }
        </Container>
    )
}

export default function OptionsColor() {
    const {product: {Colors},productOptions:{color}} = useSelector(state => state.product)
    const dispatch = useDispatch()
    
    return (
        <FilterSelect>
            <Title fontSize="1.5rem">
                {Colors.title}
            </Title>
            {Options(Colors.data,dispatch,color)}
        </FilterSelect>
    )
}