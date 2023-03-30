import { ButtonType } from "../../Atoms/Catalog/ButonType"

export default function ListTypes({ data, functionDipatch, filtered }) {
  return data.map((string) => {
    let selected = filtered.indexOf(string) > -1
    return (
      <ButtonType
        key={string}
        onClick={() => functionDipatch(string)}
        selected={selected}
      >
        - {string}
      </ButtonType>
    )
  })
}
