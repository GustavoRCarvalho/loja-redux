import styled from "styled-components";

const Price = styled.span`
    font-size: 1.15rem;
    font-weight: "700";
`
const OldPrice = styled.span`
    font-weight: ${props => props.theme.catalog.fontWeight};
    font-size: ${props => props.theme.catalog.fontSize};
    color: ${props => props.theme.catalog.colorOldPrice};
    text-decoration: line-through;
    padding-right: 1.5rem;
    margin-top: 0.2rem;
`
const PriceInstallment = styled.span`
`
const PricesDiv = styled.div`
    display: flex;
`

export default function PriceProduct (props) {

    return (
    <div>
        <PricesDiv>
            <OldPrice>
                R${props.children.oldPrice}
            </OldPrice>
            <Price>
                R${props.children.price}
            </Price>
        </PricesDiv>
        <div>
            <PriceInstallment>
                ou {props.children.installment}x de R${props.children.priceInstallment}
            </PriceInstallment>
        </div>
    </div>
    )
}