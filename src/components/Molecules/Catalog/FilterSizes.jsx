import FilterCard from "../../Atoms/Catalog/FilterCard";
import { useSelector, useDispatch } from "react-redux";
import ListSizes from "../ListsComponents/ListSizes";
import { updateFilters } from "../../../store/filterSlice";

export default function FilterSizes() {
  const {
    filtered,
    listFilters: { Sizes },
  } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  return (
    Sizes && (
      <FilterCard title={Sizes.title}>
        {ListSizes({
          data: Sizes.data,
          functionDispatch: (value) => dispatch(updateFilters(value)),
          filtered: filtered,
        })}
      </FilterCard>
    )
  );
}
