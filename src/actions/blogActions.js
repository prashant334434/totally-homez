import axios from "axios";
import { API_URL } from "../constants/config";
import { GET_ALL_BLOG_FAILURE, GET_ALL_BLOG_REQUEST, GET_ALL_BLOG_SUCCESS, GET_BLOG_DETAILS_FAILURE, GET_BLOG_DETAILS_REQUEST, GET_BLOG_DETAILS_SUCCESS, GET_CURRENT_BLOG_ID } from "../constants/blogConstants";

export const getBlogsApi = () => async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_BLOG_REQUEST });
  
      const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/blog`);

  
      dispatch({
        type: GET_ALL_BLOG_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_BLOG_FAILURE,
      });
    }
  };


  export const getBlogDetailsApi = (id) => async (dispatch) => {
    try {
      dispatch({ type: GET_BLOG_DETAILS_REQUEST });
  
      const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/blog/${id}`);

  
      dispatch({
        type:GET_BLOG_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type:GET_BLOG_DETAILS_FAILURE,
      });
    }
  };



export const currentBlog = (id) => async (dispatch) => {
  

  
    dispatch({
      type:GET_CURRENT_BLOG_ID,
      payload: id,
    });

};