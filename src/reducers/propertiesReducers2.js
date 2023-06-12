import { GET_PROPERTY_COMMUNIY_FAILURE, GET_PROPERTY_COMMUNIY_REQUEST, GET_PROPERTY_COMMUNIY_SUCCESS, GET_PROPERTY_TYPE_FAILURE, GET_PROPERTY_TYPE_REQUEST, GET_PROPERTY_TYPE_SUCCESS } from "../constants/propertyConstants2";

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



export const propertyTypeReducer = (state = { propertyType: [] }, action) => {
    switch (action.type) {
        case GET_PROPERTY_TYPE_REQUEST:
            return {
                loading: true,
                propertyType: [],
            }
        case GET_PROPERTY_TYPE_SUCCESS:
            return {
                loading: false,
                propertyType: action.payload,
              
            }
        case GET_PROPERTY_TYPE_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}

