import { GET_PROPERTY_COMMUNIY_FAILURE, GET_PROPERTY_COMMUNIY_REQUEST, GET_PROPERTY_COMMUNIY_SUCCESS } from "../constants/propertyConstants2";

export const getPropertiesCommunity = (id) =>
async (dispatch) => {
    try {
        dispatch({ type: GET_PROPERTY_COMMUNIY_REQUEST});



        const  {data} = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typeforcomm/Apartment/Rent/Property Community`);

        dispatch({
            type: GET_PROPERTY_COMMUNIY_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_PROPERTY_COMMUNIY_FAILURE,
        });
    }
};