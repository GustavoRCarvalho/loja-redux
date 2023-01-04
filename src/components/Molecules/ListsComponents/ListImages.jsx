import styled from "styled-components";
import ImageProduct from "../../Atoms/Catalog/ImageProduct";

const ImageProductSecundary = styled(ImageProduct)`
  border: ${(props) =>
    props.selected ? "1px solid " + props.theme.product.selectedColor : ""};
  margin-bottom: 1rem;
  cursor: pointer;
`;

export function ListImages({ title, imagesList, mainImage, setMainImage }) {
  return imagesList.map((src, index) => {
    const isSelected = mainImage === src;

    return (
      <ImageProductSecundary
        src={src}
        key={index}
        alt={title}
        onClick={() => {
          setMainImage(src);
        }}
        selected={isSelected}
      />
    );
  });
}
