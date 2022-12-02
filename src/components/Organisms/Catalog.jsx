import styled from "styled-components";
import ReactLoading from "react-loading";

import Product from "../Molecules/Catalog/Product"
import { useSelector } from "react-redux";
import { productsGet } from "../../data/Products"
import { useParams } from "react-router-dom";

const CatalogGrade = styled.div`
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

export default function Catalog () {
    const { catalog } = useParams()
    const {filtered} = useSelector(state => state.filters)
    
    const { data } = productsGet(catalog, filtered)

    return (
        <CatalogGrade>
            {data ? CatalogList(data) : <ReactLoading type={"spinningBubbles"} color="#fff" />}
        </CatalogGrade>
    )
}