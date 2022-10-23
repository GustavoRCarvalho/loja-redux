import styled from "styled-components"

const ErrorAlert = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50vw;
    height: 50vh;
    color: white;
}
`

export default function Error() {
    return (
        <ErrorAlert>
            Sorry, something unexpected happening :(
        </ErrorAlert>
    )
}