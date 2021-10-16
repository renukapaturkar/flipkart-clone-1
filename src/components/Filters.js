import { useContext } from "react";
import { PrimaryContext } from "../context/Context";

export const Filters = () => {
    const {dispatch} = useContext(PrimaryContext)

    const sortByBrand = (e, dispatch) => {
        if (e.target.value === "all") {
          dispatch({ type: "SORT_BY_BRAND", payload: e.target.value });
        } else if (e.target.value === "fabstar") {
          dispatch({ type: "SORT_BY_BRAND", payload: e.target.value });
        } else if (e.target.value === "blive") {
          dispatch({ type: "SORT_BY_BRAND", payload: e.target.value });
        } else if (e.target.value === "fastcolors") {
          dispatch({ type: "SORT_BY_BRAND", payload: e.target.value });
        }
        else if (e.target.value === "enwhite") {
            dispatch({ type: "SORT_BY_BRAND", payload: e.target.value });
          }
        else if (e.target.value === "hunky") {
            dispatch({ type: "SORT_BY_BRAND", payload: e.target.value });
          }

      };


    return (
      <div>
        <h1 className="font-bold">Filters</h1>
        <div className="flex flex-col">
        <h2 className="font-semibold p-2">Brand</h2>

        <input type="radio" name="brandFilter" id="brandFilter"  value="all" onClick={(e) => sortByBrand(e, dispatch)}/>
          <label>All</label>
            
        <input type="radio" name="brandFilter" id="brandFilter" value="blive" onClick={(e) => sortByBrand(e, dispatch)}/>
          <label>BLIVE</label>
  
          <input type="radio" name="brandFilter" id="brandFilter" value="fastcolors" onClick={(e) => sortByBrand(e, dispatch)}/>
          <label>FastColors</label>
  
          <input type="radio" name="brandFilter" id="brandFilter" value="enwhite" onClick={(e) => sortByBrand(e, dispatch)}/>
          <label>En White</label>
          <input type="radio" name="brandFilter" id="brandFilter" value="fabstar" onClick={(e) => sortByBrand(e, dispatch)}/>
          <label>Fab Star</label>
  
          <input type="radio" name="brandFilter" id="brandFilter" value="hunky" onClick={(e) => sortByBrand(e, dispatch)}/>
          <label>The Hunky Hippie</label>
        </div>
  
        <div  className="flex flex-col">
          <h2 className="font-semibold p-2 ">Size</h2>
          <input type="checkbox" name="sizeFilter" id="sizeFilter" />
          <label>S</label>
  
          <input type="checkbox" name="sizeFilter" id="sizeFilter" />
          <label>M</label>
  
          <input type="checkbox" name="sizeFilter" id="sizeFilter" />
          <label>L</label>
  
          <input type="checkbox" name="sizeFilter" id="sizeFilter" />
          <label>XL</label>
        </div>
      </div>
    );
  };