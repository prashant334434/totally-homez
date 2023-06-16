import axios from "axios";
import { GET_CONTACT_FAILURE, GET_CONTACT_REQUEST, GET_CONTACT_SUCCESS, POST_CONTACT_FAILURE, POST_CONTACT_REQUEST, POST_CONTACT_SUCCESS } from "../constants/contactConstants";

export const getContactUsApi = () => async (dispatch) => {
    try {
      dispatch({ type: GET_CONTACT_REQUEST});
  
      const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/contacts`);


console.log(data)
      dispatch({
        type: GET_CONTACT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CONTACT_FAILURE
      });
    }
  };


export const postContactApi =(page_name,name,email,mobile_no,message)=> async(dispatch)=>{
    try{

       dispatch({
           type:POST_CONTACT_REQUEST
       })
      


       const {data}= await axios.post(
        `https://totallyhomerealestate.com/API/api/contact_form`,
        page_name,name,email,mobile_no,message
        )

       dispatch({
           type:POST_CONTACT_SUCCESS,
           payload:data
       })
       console.log(data)

    }
    catch(error){

       dispatch({
           type:POST_CONTACT_FAILURE,
         
       })

    }
}