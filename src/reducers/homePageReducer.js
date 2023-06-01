import { GET_HOME_PAGE_DETAILS_FAILURE, GET_HOME_PAGE_DETAILS_REQUEST, GET_HOME_PAGE_DETAILS_SUCCESS } from "../constants/homePageConstants";

export const homePageReducer = (state = { homePage: [] }, action) => {
    switch (action.type) {
        case GET_HOME_PAGE_DETAILS_REQUEST:
            return {
                loading: true,
                homePage: [],
            }
        case GET_HOME_PAGE_DETAILS_SUCCESS:
            return {
                loading: false,
                homePage: action.payload,
              
            }
        case GET_HOME_PAGE_DETAILS_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}
