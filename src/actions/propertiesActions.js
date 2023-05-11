import axios from "axios";
import { GET_ALL_PROPERTIES_FAILURE, GET_ALL_PROPERTIES_REQUEST, GET_ALL_PROPERTIES_SUCCESS } from "../constants/propertyConstants";

export const getAllPropertiesApi = () =>
    async (dispatch) => {
        try {
            dispatch({ type: GET_ALL_PROPERTIES_REQUEST });



            const  data = await axios.get(`https://totallyhomerealestate.com/API/api/teams`);
            console.log(data)

            dispatch({
                type: GET_ALL_PROPERTIES_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: GET_ALL_PROPERTIES_FAILURE,
                payload: error.response.data.message,
            });
        }
    };