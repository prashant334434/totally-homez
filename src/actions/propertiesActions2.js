import axios from "axios";
import { GET_PROPERTY_TYPE2_FAILURE, GET_PROPERTY_TYPE2_REQUEST, GET_PROPERTY_TYPE2_SUCCESS } from "../constants/propertyConstants2";

export const getPropertiesType = (property_type, property_for, property_city) =>
    async (dispatch) => {
        try {
            dispatch({ type: GET_PROPERTY_TYPE2_REQUEST });



            const { data } = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typefor/${property_type}/${property_for}`);
            console.log("typeData", data)
            dispatch({
                type: GET_PROPERTY_TYPE2_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: GET_PROPERTY_TYPE2_FAILURE,
            });
        }
    };



