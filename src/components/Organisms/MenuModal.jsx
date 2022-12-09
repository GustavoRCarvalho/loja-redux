import { useDispatch } from "react-redux"
import styled from "styled-components"
import { modalMenu } from "../../store/modalSlice"
import { ModalCointainer } from "../Atoms/ModalContainer"
import ButtonClose from "../Atoms/Product/ButtonClose"

const CloseLine = styled.div`
    display: flex;
    justify-content: start;
    
    padding: 0.4rem;
`

export default function MenuModal() {
    const dispatch = useDispatch()

    function handleClose() {
        dispatch(modalMenu())
    }

    return (
        <ModalCointainer>
            <CloseLine>
                <ButtonClose onClick={()=>handleClose()}/>
            </CloseLine>

        </ModalCointainer>
    )
}