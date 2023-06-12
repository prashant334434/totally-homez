import { GET_PROPERTY_COMMUNIY_FAILURE, GET_PROPERTY_COMMUNIY_REQUEST, GET_PROPERTY_COMMUNIY_SUCCESS, GET_PROPERTY_TYPE2_FAILURE, GET_PROPERTY_TYPE2_REQUEST, GET_PROPERTY_TYPE2_SUCCESS } from "../constants/propertyConstants2";

export const propertyCommunityReducer = (state = { propertyCommunity: [] }, action) => {
    switch (action.type) {
        case GET_PROPERTY_COMMUNIY_REQUEST:
            return {
                loading: true,
                propertyCommunity: [],
            }
        case GET_PROPERTY_COMMUNIY_SUCCESS:
            return {
                loading: false,
                propertyCommunity: action.payload,
              
            }
        case GET_PROPERTY_COMMUNIY_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}



export const propertyTypeReducerDetails = (state = { propertyTypeDetails: [] }, action) => {
    switch (action.type) {
        case GET_PROPERTY_TYPE2_REQUEST:
            return {
                loading: true,
                propertyTypeDetails: [],
            }
        case GET_PROPERTY_TYPE2_SUCCESS:
            return {
                loading: false,
                propertyTypeDetails: action.payload,
              
            }
        case GET_PROPERTY_TYPE2_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}

