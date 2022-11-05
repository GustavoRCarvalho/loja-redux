import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { detailProduct } from "../../data/detailProduct"
import { updateProduct, updateProductColor, updateProductSize } from "../../store/productSlice"
import ProductTemplate from "../Templates/ProductTemplate"

export default function Product() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const product = detailProduct(id)

    useEffect(()=>{
        dispatch(updateProduct(product))
        dispatch(updateProductSize(product.sizes.data[0]))
        dispatch(updateProductColor(product.colors.data[0]))
    })
    console.log(detailProduct(id))

    return (
        <ProductTemplate />
    )
}