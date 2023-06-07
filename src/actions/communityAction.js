import axios from "axios";
import {GET_COMMUNITY_CATEGORY__REQUEST, GET_COMMUNITY_CATEGORY__SUCCESS, GET_COMMUNITY_CATEGORY_FAILURE, GET_COMMUNITY_GUIDELINES__REQUEST,GET_COMMUNITY_GUIDELINES__SUCCESS, GET_COMMUNITY_GUIDELINES_FAILURE } from "../constants/communityConstants";

export const getcommunityApi=() =>async(dispatch)=>{
    try{
      dispatch({type: GET_COMMUNITY_GUIDELINES__REQUEST});
      const {data} = await axios.get(`https://totallyhomerealestate.com/API/api/communites`);

      dispatch({

        type: GET_COMMUNITY_GUIDELINES__SUCCESS,
        payload: data,
      }); 
    }

    catch(error){
        dispatch({
            type: GET_COMMUNITY_GUIDELINES_FAILURE,
        });
    }
};



export const getCommunityCategoryApi=() =>async(dispatch)=>{
  try{
    dispatch({type: GET_COMMUNITY_CATEGORY__REQUEST});
    const {data} = await axios.get(`https://totallyhomerealestate.com/API/api/comm_cat`);

    dispatch({

      type: GET_COMMUNITY_CATEGORY__SUCCESS,
      payload: data,
    }); 
  }

  catch(error){
      dispatch({
          type: GET_COMMUNITY_CATEGORY_FAILURE,
      });
  }
};