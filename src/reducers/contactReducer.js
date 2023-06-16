import { GET_CONTACT_FAILURE, GET_CONTACT_REQUEST, GET_CONTACT_SUCCESS, POST_CONTACT_FAILURE, POST_CONTACT_REQUEST, POST_CONTACT_SUCCESS } from "../constants/contactConstants";

export const contactReducer = (state = { contact: [] }, action) => {
    switch (action.type) {
        case GET_CONTACT_REQUEST:
            return {
                loading: true,
                contact: [],
            }
        case GET_CONTACT_SUCCESS:
            return {
                loading: false,
                contact: action.payload,
              
            }
        case GET_CONTACT_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}



export const contactFormReducer = (state = { }, action) => {
    switch (action.type) {
        case POST_CONTACT_REQUEST:
            return {
                loading: true,
                contacts: [],
            }
        case POST_CONTACT_SUCCESS:
            return {
                loading: false,
                contacts: action.payload,
              
            }
        case POST_CONTACT_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}
