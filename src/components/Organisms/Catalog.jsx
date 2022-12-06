import styled from "styled-components";
import ReactLoading from "react-loading";

import Product from "../Molecules/Catalog/Product"
import { useSelector } from "react-redux";
import { productsGet } from "../../data/Products"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CatalogGrade = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    justify-content: space-evenly;

    @media screen and (min-width: ${props => props.theme.device.desktopMin}) {
        max-width: 80rem;
        width: 75vw;
    }                                                                                               

    @media screen and 
           (min-width: ${props => props.theme.device.laptopMin}) and
           (max-width: ${props => props.theme.device.laptopMax}) {
        max-width: 50rem;
        width: 65vw;
    }
    @media screen and 
           (min-width: ${props => props.theme.device.mobileMin}) and
           (max-width: ${props => props.theme.device.mobileMax}) {
        max-width: 33rem;
    }
`

const LoadingContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

function CatalogList(data) {
    return data.map((product, index)=>{
        return <Product key={index} product={product}/>
    })}

export default function Catalog () {
    const { catalog } = useParams()
    const { filtered } = useSelector(state => state.filters)
    const [ data, setData ] = useState({})
    
    useEffect(()=>{
        setData({})
        setTimeout(()=>
            setData(productsGet(catalog, filtered))
            ,300)
    }, [catalog, filtered])

    return (
        <CatalogGrade>
            {data && data.data 
            ? CatalogList(data.data) 
            : <LoadingContainer>
                <ReactLoading type={"spinningBubbles"} color="#fff" />
            </LoadingContainer>
            }
        </CatalogGrade>
    )
}