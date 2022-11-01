import styled from "styled-components";
import ReactLoading from "react-loading";

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

export default function Catalog ({data}) {
    return (
        <CatalogGrade>
            {data ? CatalogList(data) : <ReactLoading type={"spinningBubbles"} color="#fff" />}
        </CatalogGrade>
    )
}