import { useDispatch } from "react-redux"
import styled from "styled-components"
import { modalMenu } from "../../store/modalSlice"
import ButtonClose from "../Atoms/Product/ButtonClose"

const Modal = styled.div`
    background-color: #212021;

    height: 100%;
    width: 80%;

    position: absolute;
`

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
        <Modal>
            <CloseLine>
                <ButtonClose onClick={()=>handleClose()}/>
            </CloseLine>

        </Modal>
    )
}