import { ButtonSize } from "../../Atoms/Catalog/ButtonSize";

export default function ListSizes({ data, functionDispatch, filtered }) {
  return data.map((string, index) => {
    let selected;

    if (Array.isArray(filtered)) selected = filtered.indexOf(string) > -1;
    else selected = string === filtered;

    return (
      <ButtonSize
        title={string}
        key={index}
        onClick={() => functionDispatch(string)}
        selected={selected}
      >
        {string}
      </ButtonSize>
    );
  });
}
