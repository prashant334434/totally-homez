import axios from "axios";
import { GET_ALL_CAROUSELS_FAILURE, GET_ALL_CAROUSELS_REQUEST, GET_ALL_CAROUSELS_SUCCESS } from "../constants/carouselConstants";

export const getCarouselsApi = () =>
    async (dispatch) => {
        try {
            dispatch({ type: GET_ALL_CAROUSELS_REQUEST });



            const  data = await axios.get(`https://totallyhomerealestate.com/API/api/carousels`);
            console.log(data)

            dispatch({
                type: GET_ALL_CAROUSELS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type:GET_ALL_CAROUSELS_FAILURE,
                payload: error.response.data.message,
            });
        }
    };