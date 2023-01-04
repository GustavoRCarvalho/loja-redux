import { useDispatch } from "react-redux";
import styled from "styled-components";
import { modalFilters } from "../../../store/modalSlice";

const Button = styled.div`
  background-color: #222;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0.5rem;
  height: 2.5rem;
  width: 100%;

  cursor: pointer;
`;

export default function FiltersButton() {
  const dispatch = useDispatch();

  function handleOpen() {
    dispatch(modalFilters());
  }

  return <Button onClick={() => handleOpen()}>FITLROS</Button>;
}
