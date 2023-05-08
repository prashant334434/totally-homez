import { GET_ALL_PROPERTIES_FAILURE, GET_ALL_PROPERTIES_REQUEST, GET_ALL_PROPERTIES_SUCCESS } from "../constants/propertyConstants";

export const propertyReducer = (state = { properties: [] }, action) => {
    switch (action.type) {
        case GET_ALL_PROPERTIES_REQUEST:
            return {
                loading: true,
                properties: [],
            }
        case GET_ALL_PROPERTIES_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
              
            }
        case GET_ALL_PROPERTIES_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}