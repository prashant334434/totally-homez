import { GET_ALL_EXCLUSIVE_PROPERTIES_FAILURE, GET_ALL_EXCLUSIVE_PROPERTIES_REQUEST, GET_ALL_EXCLUSIVE_PROPERTIES_SUCCESS } from "../constants/PropertiesConstants";
import { GET_ALL_PROPERTIES_REQUEST } from "../constants/propertyConstants";

 export const allPropertiesReducer = (state ={ properties: [] },action)=>{
    switch(action.type){
         case GET_ALL_EXCLUSIVE_PROPERTIES_REQUEST:
            return{
                loading: true,
                properties: [],

            }
        case GET_ALL_EXCLUSIVE_PROPERTIES_SUCCESS:
            return{
                            loading: false,
                            properties: action.payload
                        }

        case GET_ALL_EXCLUSIVE_PROPERTIES_FAILURE: {
                            return {
                                loading: false,
                                error: action.payload,
                            }
                        }
        default:
            return state;
        }
 }