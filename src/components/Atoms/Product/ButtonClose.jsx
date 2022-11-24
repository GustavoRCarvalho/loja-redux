import styled from "styled-components"
import { IoClose } from 'react-icons/io5'

const CloseContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.35);
    transition: background-color 0.2s;

    height: 2.5rem;
    width: 2.5rem;

    border-radius: 0.3rem;
    cursor: pointer;

    :hover {
        background-color: rgb(140, 0, 145);
        transition: background-color 0.2s;
    }
`

const Close = styled(IoClose)`
    height: 1.5rem;
    width: 1.5rem;
`

export default function ButtonClose(props) {

    return (
        <CloseContainer id="closeButtonCart" {...props}>
            <Close />
        </CloseContainer>
    )
}