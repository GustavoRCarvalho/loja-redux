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

function CatalogList(data) {
    return data.map((product, index)=>{
        return <Product key={index} product={product}/>
    })}

export default function Catalog ({data},props) {

    return (
        <CatalogGrade>
            {CatalogList(data)}
        </CatalogGrade>
    )
}