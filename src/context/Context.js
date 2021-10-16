import { createContext, useReducer} from "react";
import {reducer} from './reducer'


const initialValue = {
    sortByPrice: "lowtohigh", 
    sortbybrand: "all"
}

export const PrimaryContext = createContext()

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue)

    return (
        <PrimaryContext.Provider value={{...state, dispatch}}>
            {children}
        </PrimaryContext.Provider>
    )
}