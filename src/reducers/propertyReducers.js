import { GET_ALL_PROPERTIES_FAILURE, GET_ALL_PROPERTIES_REQUEST, GET_ALL_PROPERTIES_SUCCESS, GET_PROPERTY_AMENITIES_FAILURE, GET_PROPERTY_AMENITIES_REQUEST, GET_PROPERTY_AMENITIES_SUCCESS, GET_PROPERTY_DETAILS_FAILURE, GET_PROPERTY_DETAILS_REQUEST, GET_PROPERTY_DETAILS_SUCCESS, GET_PROPERTY_IMAGES_FAILURE, GET_PROPERTY_IMAGES_REQUEST, GET_PROPERTY_IMAGES_SUCCESS, GET_PROPERTY_LEVEL_FAILURE, GET_PROPERTY_LEVEL_REQUEST, GET_PROPERTY_LEVEL_SUCCESS, GET_PROPERTY_NEAR_BY_FAILURE, GET_PROPERTY_NEAR_BY_REQUEST, GET_PROPERTY_NEAR_BY_SUCCESS, GET_PROPERTY_SUB_COMMUNIY_FAILURE, GET_PROPERTY_SUB_COMMUNIY_REQUEST, GET_PROPERTY_SUB_COMMUNIY_SUCCESS } from "../constants/propertyConstants";

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


export const propertyDetailsReducer = (state = { propertyDetails: {} }, action) => {
    switch (action.type) {
        case GET_PROPERTY_DETAILS_REQUEST:
            return {
                loading: true,
                properties: {},
            }
        case GET_PROPERTY_DETAILS_SUCCESS:
            return {
                loading: false,
                propertyDetails: action.payload,
              
            }
        case GET_PROPERTY_DETAILS_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}



export const propertyImagesReducer = (state = { propertyImages: [] }, action) => {
    switch (action.type) {
        case GET_PROPERTY_IMAGES_REQUEST:
            return {
                loading: true,
                properties: {},
            }
        case GET_PROPERTY_IMAGES_SUCCESS:
            return {
                loading: false,
                propertyImages: action.payload,
              
            }
        case GET_PROPERTY_IMAGES_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}



export const propertyAmenitiesReducer = (state = { propertyAmenities: [] }, action) => {
    switch (action.type) {
        case GET_PROPERTY_AMENITIES_REQUEST:
            return {
                loading: true,
                propertyAmenities: [],
            }
        case GET_PROPERTY_AMENITIES_SUCCESS:
            return {
                loading: false,
                propertyAmenities: action.payload,
              
            }
        case GET_PROPERTY_AMENITIES_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}


export const propertyNearByReducer = (state = { propertiesNearBy: [] }, action) => {
    switch (action.type) {
        case GET_PROPERTY_NEAR_BY_REQUEST:
            return {
                loading: true,
                propertiesNearBy: [],
            }
        case GET_PROPERTY_NEAR_BY_SUCCESS:
            return {
                loading: false,
                propertiesNearBy: action.payload,
              
            }
        case GET_PROPERTY_NEAR_BY_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}



export const propertyLevelReducer = (state ={ propertyLevel :[]}, action) => {
    switch (action.type) {
        case GET_PROPERTY_LEVEL_REQUEST:
            return {
                loading: true,
                propertyLevel:[]
            }
        case GET_PROPERTY_LEVEL_SUCCESS:
            return {
                loading: false,
                propertyLevel: action.payload,
              
            }
        case GET_PROPERTY_LEVEL_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}




export const propertySubCommunityReducer = (state ={ propertySubCommunity :[]}, action) => {
    switch (action.type) {
        case GET_PROPERTY_SUB_COMMUNIY_REQUEST:
            return {
                loading: true,
                propertySubCommunity:[]
            }
        case GET_PROPERTY_SUB_COMMUNIY_SUCCESS:
            return {
                loading: false,
                propertySubCommunity: action.payload,
              
            }
        case GET_PROPERTY_SUB_COMMUNIY_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}



