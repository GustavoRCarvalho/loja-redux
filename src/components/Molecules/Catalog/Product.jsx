import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ImageProduct from "../../Atoms/Catalog/ImageProduct";
import PriceProduct from "../../Atoms/Catalog/PriceProduct";
import TitleProduct from "../../Atoms/Catalog/Title";

const Card = styled(Link)`
  color: ${(props) => props.theme.catalog.color};
  width: 15rem;
  height: 100%;
  margin-inline: 0.9%;
  margin-block: 2%;
  text-decoration: none;
  font-size: ${(props) => props.theme.catalog.fontSize};

  cursor: pointer;

  @media screen and (max-width: ${(props) =>
      props.theme.device.mobileMax}) and (min-width: ${(props) =>
      props.theme.device.mobileMin}) {
    width: 9rem;
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Image = styled(ImageProduct)`
  width: 100%;

  @media screen and (max-width: ${(props) =>
      props.theme.device.mobileMax}) and (min-width: ${(props) =>
      props.theme.device.mobileMin}) {
    width: 80%;
  }
`;

export default function Product(props) {
  const [hover, setHover] = useState(false);

  return (
    <Card
      to={`/roupas/id=${props.product.id}`}
      onMouseEnter={(_) => setHover(true)}
      onMouseLeave={(_) => setHover(false)}
    >
      <Image
        alt={props.product.title}
        src={hover ? props.product.imageHover : props.product.image}
      />
      <TitleProduct hover={hover}>{props.product.title}</TitleProduct>
      <PriceProduct {...props.product} />
    </Card>
  );
}
