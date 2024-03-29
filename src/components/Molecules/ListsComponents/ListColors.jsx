import { ButtonColor } from "../../Atoms/Catalog/ButtonColor"

export default function ListColor({ data, functionDispatch, filtered }) {
  return data.map((obj) => {
    const listButtons = []
    let selected

    if (Array.isArray(filtered)) selected = filtered.indexOf(obj.key) > -1
    else selected = obj.key === filtered

    listButtons.push(
      <ButtonColor
        key={obj.key}
        color={obj.value}
        title={obj.key}
        onClick={() => functionDispatch(obj.key)}
        selected={selected}
      />
    )
    return listButtons
  })
}
