import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateCurrentPage } from "../../../store/filterSlice";

const Paginate = styled(ReactPaginate)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  width: 80%;
  margin: 0;
  padding: 0;
  font-size: 1.1rem;

  > li {
    background-color: #312e30;
    color: white;

    margin: 0.5rem;
    border-radius: 0.1rem;

    cursor: pointer;
    @media screen and (min-width: ${(props) =>
        props.theme.device.mobileMin}) and (max-width: ${(props) =>
        props.theme.device.mobileMax}) {
      margin: 0.2rem;
    }
  }
  > li > a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.5rem;
    height: 2.5rem;

    @media screen and (min-width: ${(props) =>
        props.theme.device.mobileMin}) and (max-width: ${(props) =>
        props.theme.device.mobileMax}) {
      width: 1.5rem;
      height: 1.5rem;
      font-size: 0.8rem;
    }
  }

  .selected {
    background-color: #d86dff;
    @media screen and (min-width: ${(props) =>
        props.theme.device.mobileMin}) and (max-width: ${(props) =>
        props.theme.device.mobileMax}) {
      display: flex;
    }
  }

  .previous > a {
    width: 6rem;
    @media screen and (min-width: ${(props) =>
        props.theme.device.mobileMin}) and (max-width: ${(props) =>
        props.theme.device.mobileMax}) {
      display: none;
    }
  }

  .next > a {
    width: 6rem;
    @media screen and (min-width: ${(props) =>
        props.theme.device.mobileMin}) and (max-width: ${(props) =>
        props.theme.device.mobileMax}) {
      display: none;
    }
  }

  .disabled {
    color: #9b9b9b;
    cursor: not-allowed;
  }
`;

export default function Pagination(props) {
  const dispatch = useDispatch();

  function handleChangePage(page) {
    dispatch(updateCurrentPage(page));
  }

  return (
    <Paginate
      onPageChange={({ selected }) => {
        handleChangePage(selected);
      }}
      breakLabel="..."
      nextLabel="Próximo >"
      previousLabel="< Voltar"
      pageRangeDisplayed={1}
      renderOnZeroPageCount={null}
      {...props}
    />
  );
}
