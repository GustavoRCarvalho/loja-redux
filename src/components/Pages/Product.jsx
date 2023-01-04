import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { detailProduct } from "../../data/detailProduct";
import {
  updateProductColor,
  updateProductSize,
} from "../../store/productSlice";
import ProductTemplate from "../Templates/ProductTemplate";

export let productData;

export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();

  productData = detailProduct(id);

  useEffect(() => {
    dispatch(updateProductSize(productData.sizes.data[0]));
    dispatch(updateProductColor(productData.colors.data[0].key));
  });

  return <ProductTemplate />;
}
