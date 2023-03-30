import styled from "styled-components"
import ReactLoading from "react-loading"

import Product from "../Molecules/Catalog/Product"
import { useSelector } from "react-redux"
import { productsGet } from "../../data/Products"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Pagination from "../Atoms/Catalog/Pagination"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${(props) => props.theme.device.desktopMin}) {
    max-width: 80rem;
    width: 75vw;
  }

  @media screen and (min-width: ${(props) =>
      props.theme.device.laptopMin}) and (max-width: ${(props) =>
      props.theme.device.laptopMax}) {
    max-width: 50rem;
    width: 65vw;
    align-items: flex-start;
  }

  @media screen and (min-width: ${(props) =>
      props.theme.device.mobileMin}) and (max-width: ${(props) =>
      props.theme.device.mobileMax}) {
    max-width: 33rem;
    width: 93.9vw;
  }
`

const CatalogGrade = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
`

const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

function CatalogList(data) {
  return data.map((product, index) => {
    return <Product key={index} product={product} />
  })
}

export default function Catalog() {
  const { catalog } = useParams()
  const { filtered, order, currentPage } = useSelector((state) => state.filters)
  const [data, setData] = useState({})
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    setData({})
    setPageCount(0)
    setTimeout(() => {
      let products = productsGet({
        catalog: catalog,
        filter: filtered,
        order: order,
        currentPage: currentPage,
      })
      products.pagination && setPageCount(products.pagination.pageCount)
      products.data && setData(products.data)
    }, 300)
  }, [catalog, filtered, order, currentPage])

  return (
    <PageContainer>
      <CatalogGrade>
        {data.length ? (
          CatalogList(data)
        ) : (
          <LoadingContainer>
            <ReactLoading type={"spinningBubbles"} color="#fff" />
          </LoadingContainer>
        )}
      </CatalogGrade>
      <Pagination forcePage={currentPage} pageCount={pageCount} />
    </PageContainer>
  )
}
