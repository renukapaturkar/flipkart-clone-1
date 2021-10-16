export const reducer = (state, action) => {
    switch (action.type) {
        case "SORT_BY_PRICE":
            return {
                ...state, 
                sortbyprice: action.payload
            }
        case "SORT_BY_BRAND":
            return {
                ...state, 
                sortbybrand: action.payload
            }
    
        default:
            return state;
    }
}