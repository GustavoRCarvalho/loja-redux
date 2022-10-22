import styled from "styled-components";

import Product from "../Molecules/Product"

const CatalogGrade = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    justify-content: space-evenly;
`

const CatalogList = (data) => 
    data.map((product, index)=>{
        return <Product key={index} product={product}/>
    })

export default function Catalog (props) {

    return (
        <CatalogGrade>
            {CatalogList(props.data)}
        </CatalogGrade>
    )
}