import { ButtonSize } from "../../Atoms/Catalog/ButtonSize"

export default function ListSizes({ data, functionDispatch, filtered }) {
  return data.map((string) => {
    let selected

    if (Array.isArray(filtered)) selected = filtered.indexOf(string) > -1
    else selected = string === filtered

    return (
      <ButtonSize
        title={string}
        key={string}
        onClick={() => functionDispatch(string)}
        selected={selected}
      >
        {string}
      </ButtonSize>
    )
  })
}
