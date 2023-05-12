import axios from "axios";
import { CATEGORY_PROPERTIES_FAILURE, CATEGORY_PROPERTIES_REQUEST, CATEGORY_PROPERTIES_SUCCESS } from "../constants/categoryConstants";

export const getCatgoryProperties = () =>
    async (dispatch) => {
        try {
            dispatch({ type: CATEGORY_PROPERTIES_REQUEST });



            const  data = await axios.get(`https://totallyhomerealestate.com/API/api/properties/type/apartment`);
            console.log(data)

            dispatch({
                type: CATEGORY_PROPERTIES_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type:CATEGORY_PROPERTIES_FAILURE,
                payload: error.response.data.message,
            });
        }
    };