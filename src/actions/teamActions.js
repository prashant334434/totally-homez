import axios from "axios";
import { GET_ALL_TEAM_FAILURE, GET_ALL_TEAM_REQUEST, GET_ALL_TEAM_SUCCESS } from "../constants/teamConstants";

export const getTeamsApi = () =>
    async (dispatch) => {
        try {
            dispatch({ type: GET_ALL_TEAM_REQUEST });



            const  {data} = await axios.get(`https://totallyhomerealestate.com/API/api/teams`);
            console.log(data)

            dispatch({
                type: GET_ALL_TEAM_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: GET_ALL_TEAM_FAILURE,
                payload: error.response.data.message,
            });
        }
    };