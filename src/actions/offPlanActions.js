import axios from "axios";
import { GET_OFFPLAN_CATEGORY_FAILURE, GET_OFFPLAN_CATEGORY_REQUEST, GET_OFFPLAN_CATEGORY_SUCCESS, GET_OFF_PLAN_FAIL, GET_OFF_PLAN_REQUEST, GET_OFF_PLAN_SUCCESS } from "../constants/offPlanConstants"

export const getOffPlanApi = () => async (dispatch) => {
    try {
      dispatch({ type: GET_OFF_PLAN_REQUEST });
  
      const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/offplans`);

  
      dispatch({
        type: GET_OFF_PLAN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_OFF_PLAN_FAIL,
      });
    }
  };




  export const getOffPlanCategoryApi = () => async (dispatch) => {
    try {
      dispatch({ type:GET_OFFPLAN_CATEGORY_REQUEST });
  
      const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/offplan_cat`);

  
      dispatch({
        type: GET_OFFPLAN_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:GET_OFFPLAN_CATEGORY_FAILURE,
      });
    }
  };