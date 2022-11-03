import styled from "styled-components";

const Price = styled.span`
    font-size: ${props => props.fontSizePrice ? props.fontSizePrice : "1.15rem"};
    font-weight: "700";
`

const OldPrice = styled.span`
    font-weight: ${props => props.theme.catalog.fontWeight};
    font-size: ${props => props.fontSizeOld ? props.fontSizeOld : props.theme.catalog.fontSize};
    color: ${props => props.theme.catalog.colorOldPrice};
    text-decoration: line-through;
    padding-right: 1.5rem;
    margin-top: 0.2rem;
`

const PriceInstallment = styled.span`
    font-size: ${props => props.fontSize ? props.fontSize : "1rem"};
`

const PricesDiv = styled.div`
    display: flex;
`

export default function PriceProduct (props) {

    return (
        <div>
            <PricesDiv>
                <OldPrice {...props}>
                    R${props.oldPrice}
                </OldPrice>
                <Price {...props}>
                    R${props.price}
                </Price>
            </PricesDiv>
            <div>
                <PriceInstallment>
                    ou {props.installment}x de R${props.priceInstallment}
                </PriceInstallment>
            </div>
        </div>
    )
}