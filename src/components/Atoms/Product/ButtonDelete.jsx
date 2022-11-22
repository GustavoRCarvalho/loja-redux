import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { removeProductToCart } from "../../../store/cartSlice"

const QuantityConteiner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.35);
    transition: background-color 0.2s;

    min-height: 3rem;
    min-width: 3rem;

    border-radius: 0.3rem;
    cursor: pointer;
    
    :hover {
        background-color: rgb(175, 0, 0);
        transition: background-color 0.2s;
    }
`

const IconDelete = styled(AiFillDelete)`
    height: 1.5rem;
    width: 1.5rem;
`

export default function ButtonDelete({product}) {
    const dispatch = useDispatch()

    function deleteProduct(product) {
        dispatch(removeProductToCart(product))
    }

    return (
        <QuantityConteiner onClick={()=>{deleteProduct(product)}}>
            <IconDelete />
        </QuantityConteiner>
    )
}