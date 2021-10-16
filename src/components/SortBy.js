import { useContext } from "react";
import { PrimaryContext } from "../context/Context";

export const SortBy = () => {
    const {dispatch} = useContext(PrimaryContext)

    const sortByPrice = (e, dispatch) => {
        if(e.target.value === "lowtphigh"){
            dispatch({type: "SORT_BY_PRICE", payload: e.target.value})
        }else {
            dispatch({type: "SORT_BY_PRICE", payload: e.target.value})
        }
    }
    return (
      <div className="border p-2 align-right outline">
        
        <select onChange={(e) => sortByPrice(e, dispatch)}>
            <option value="lowtohigh">Sort by: Low to High</option>
            <option value="hightolow">Sort by: High to Low</option>
        </select>
      </div>
    );
  };