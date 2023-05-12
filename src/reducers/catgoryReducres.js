import { CATEGORY_PROPERTIES_FAILURE, CATEGORY_PROPERTIES_REQUEST, CATEGORY_PROPERTIES_SUCCESS } from "../constants/categoryConstants";

export const catgoryReducer = (state = { catgoryProperties: [] }, action) => {
    switch (action.type) {
        case CATEGORY_PROPERTIES_REQUEST:
            return {
                loading: true,
                catgoryProperties: [],
            }
        case CATEGORY_PROPERTIES_SUCCESS:
            return {
                loading: false,
                catgoryProperties: action.payload.data,
              
            }
        case CATEGORY_PROPERTIES_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}
