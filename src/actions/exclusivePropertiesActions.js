import { GET_ALL_EXCLUSIVE_PROPERTIES_FAILURE, GET_ALL_EXCLUSIVE_PROPERTIES_REQUEST, GET_ALL_EXCLUSIVE_PROPERTIES_SUCCESS } from "../constants/PropertiesConstants";




export const getSingalPropertyDetailsApi = (property_for) =>
    async (dispatch) => {
        try {
            dispatch({ type: GET_ALL_EXCLUSIVE_PROPERTIES_REQUEST });



            const { data } = await axios.get(`https://totallyhomerealestate.com/API/api/properties/profor/${property_for}/`);
           
            dispatch({
                type: GET_ALL_EXCLUSIVE_PROPERTIES_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: GET_ALL_EXCLUSIVE_PROPERTIES_FAILURE,
                payload: error.response.data.message,
            });
        }
    };