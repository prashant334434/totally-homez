import axios from "axios";
import { GET_ALL_TEAM_FAILURE, GET_ALL_TEAM_REQUEST, GET_ALL_TEAM_SUCCESS, GET_CURRENT_TEAM_MEMBER_ID, GET_TEAM_DETAILS_FAILURE, GET_TEAM_DETAILS_REQUEST, GET_TEAM_DETAILS_SUCCESS } from "../constants/teamConstants";
import { API_URL } from "../constants/config";

export const getTeamsApi = () => async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_TEAM_REQUEST });
  
      const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/teams`);

    
  
      dispatch({
        type: GET_ALL_TEAM_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_TEAM_FAILURE,
      });
    }
  };


  export const getTeamDetailsApi = (id) => async (dispatch) => {
    try {
      dispatch({ type: GET_TEAM_DETAILS_REQUEST });
  
      const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/teams/${id}`);

  
      dispatch({
        type:GET_TEAM_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:GET_TEAM_DETAILS_FAILURE,
      });
    }
  };


  export const currentTeamMemberId = (id) => async (dispatch) => {
    try {
      dispatch({ type: GET_TEAM_DETAILS_REQUEST });
  
      const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/teams/${id}`);

  
      dispatch({
        type:GET_TEAM_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:GET_TEAM_DETAILS_FAILURE,
      });
    }
  };



  export const currentTeamMember = (id) => async (dispatch) => {
  

  
      dispatch({
        type:GET_CURRENT_TEAM_MEMBER_ID,
        payload: id,
      });
  
  };