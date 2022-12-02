import { updateFilters } from "../../store/filterSlice";
import { ButtonType } from "../Atoms/Catalog/ButonType";

export default function ListTypes(data,dispatch,filtered) {
    return data.map((string)=>{
        let selected = filtered.indexOf(string) > -1
        return (
            <ButtonType
                key={string} 
                onClick={()=>dispatch(updateFilters(string))} 
                selected={selected}>

                - {string}
                
            </ButtonType>
        )
    })
}