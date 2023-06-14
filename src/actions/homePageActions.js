import axios from "axios";
import { GET_HOME_PAGE_DETAILS_FAILURE, GET_HOME_PAGE_DETAILS_REQUEST, GET_HOME_PAGE_DETAILS_SUCCESS } from "../constants/homePageConstants";

export const getHomePageApi = () => async (dispatch) => {

    try {
      dispatch({ type: GET_HOME_PAGE_DETAILS_REQUEST });
  
      const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/home`);

  
      dispatch({
        type: GET_HOME_PAGE_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_HOME_PAGE_DETAILS_FAILURE,
      });
    }
  };


 