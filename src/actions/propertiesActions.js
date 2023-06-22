import axios from "axios";
import { GET_ALL_PROPERTIES_FAILURE, GET_ALL_PROPERTIES_REQUEST, GET_ALL_PROPERTIES_SUCCESS, GET_PROPERTIES_FOR__FAILURE, GET_PROPERTIES_FOR__REQUEST, GET_PROPERTIES_FOR__SUCCESS, GET_PROPERTY_AMENITIES_FAILURE, GET_PROPERTY_AMENITIES_REQUEST, GET_PROPERTY_AMENITIES_SUCCESS, GET_PROPERTY_DETAILS_FAILURE, GET_PROPERTY_DETAILS_REQUEST, GET_PROPERTY_DETAILS_SUCCESS, GET_PROPERTY_IMAGES_FAILURE, GET_PROPERTY_IMAGES_REQUEST, GET_PROPERTY_IMAGES_SUCCESS, GET_PROPERTY_IMAGE_FAILURE, GET_PROPERTY_IMAGE_REQUEST, GET_PROPERTY_IMAGE_SUCCESS, GET_PROPERTY_LEVEL_FAILURE, GET_PROPERTY_LEVEL_REQUEST, GET_PROPERTY_LEVEL_SUCCESS, GET_PROPERTY_NEAR_BY_FAILURE, GET_PROPERTY_NEAR_BY_REQUEST, GET_PROPERTY_NEAR_BY_SUCCESS, GET_PROPERTY_SUB_COMMUNIY_FAILURE, GET_PROPERTY_SUB_COMMUNIY_REQUEST, GET_PROPERTY_SUB_COMMUNIY_SUCCESS } from "../constants/propertyConstants";
import { GET_PROPERTIES_BY_TYPE_FAILURE, GET_PROPERTIES_BY_TYPE_REQUEST, GET_PROPERTIES_BY_TYPE_SUCCESS } from "../constants/propertyyTypeConstants";
import { GET_PROPERTY_COMMUNIY_FAILURE, GET_PROPERTY_COMMUNIY_REQUEST, GET_PROPERTY_COMMUNIY_SUCCESS } from "../constants/propertyConstants2";

export const getAllPropertiesApi = () =>
    async (dispatch) => {
        try {
            dispatch({ type: GET_ALL_PROPERTIES_REQUEST });



            const data = await axios.get(`https://totallyhomerealestate.com/API/api/properties`);
         
            dispatch({
                type: GET_ALL_PROPERTIES_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: GET_ALL_PROPERTIES_FAILURE,
            });
        }
    };



export const getSingalPropertyDetailsApi = (id) =>
    async (dispatch) => {
        try {
            dispatch({ type: GET_PROPERTY_DETAILS_REQUEST });



            const { data } = await axios.get(`https://totallyhomerealestate.com/API/api/properties/${id}`);
           
            dispatch({
                type: GET_PROPERTY_DETAILS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: GET_PROPERTY_DETAILS_FAILURE,
                payload: error.response.data.message,
            });
        }
    };




export const getPropertiesByTypeApi = (type) =>
    async (dispatch) => {
        try {
            dispatch({ type: GET_PROPERTIES_BY_TYPE_REQUEST });



            const { data } = await axios.get(`https://totallyhomerealestate.com/API/api/properties/type/${type}`);

            dispatch({
                type: GET_PROPERTIES_BY_TYPE_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: GET_PROPERTIES_BY_TYPE_FAILURE,
            });
        }
    };


export const getPropertiesImagesApi = (id) =>
    async (dispatch) => {
        try {
            dispatch({ type: GET_PROPERTY_IMAGES_REQUEST });



            const { data } = await axios.get(`https://totallyhomerealestate.com/API/api/properties/img/${id}`);

            dispatch({
                type: GET_PROPERTY_IMAGES_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: GET_PROPERTY_IMAGES_FAILURE,
            });
        }
    };




export const getPropertiesNearByApi = (id) =>
    async (dispatch) => {
        try {
            dispatch({ type: GET_PROPERTY_NEAR_BY_REQUEST });



            const { data } = await axios.get(`https://totallyhomerealestate.com/API/api/properties/nearplace/${id}`);

            dispatch({
                type: GET_PROPERTY_NEAR_BY_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: GET_PROPERTY_NEAR_BY_FAILURE,
            });
        }
    };




export const getPropertiesAmenitiesApi = (id) =>
    async (dispatch) => {
        try {
            dispatch({ type: GET_PROPERTY_AMENITIES_REQUEST });



            const { data } = await axios.get(`https://totallyhomerealestate.com/API/api/properties/ani/${id}`);

            dispatch({
                type: GET_PROPERTY_AMENITIES_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: GET_PROPERTY_AMENITIES_FAILURE,
            });
        }
    };




export const getPropertyLevelApi = () =>
    async (dispatch) => {
        try {
            dispatch({ type: GET_PROPERTY_LEVEL_REQUEST });



            const {data} = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typeforlevel/Villa/Sale/LEVEL123`);
            
            dispatch({
                type: GET_PROPERTY_LEVEL_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: GET_PROPERTY_LEVEL_FAILURE,
                payload: error.response.data.message,
            });
        }
    };




export const getPropertySubCommunityApi = (property_for, property_city, property_community, property_type, orignalSubCommunity) =>
    async (dispatch) => {
        try {
            dispatch({ type: GET_PROPERTY_SUB_COMMUNIY_REQUEST });



            const { data } = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typeforsubcomm/${property_type}/${property_for}/${orignalSubCommunity}`);
         

            dispatch({
                type: GET_PROPERTY_SUB_COMMUNIY_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: GET_PROPERTY_SUB_COMMUNIY_FAILURE,
                payload: error.response.data.message,
            });
        }
    };



export const getPropertiesCommunity = (property_city,property_type,property_for,orignalCommunity) =>
    async (dispatch) => {
        try {
            dispatch({ type: GET_PROPERTY_COMMUNIY_REQUEST });



            const { data } = await axios.get(`https://totallyhomerealestate.com/API/api/properties/typeforcomm/${property_type}/${property_for}/${orignalCommunity}`);

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


    export const getPropertiesImage = (id) =>
    async (dispatch) => {
        try {
            dispatch({ type: GET_PROPERTY_IMAGE_REQUEST });



            const { data } = await axios.get(`https://totallyhomerealestate.com/API/api/properties/img/${id}`);

            dispatch({
                type: GET_PROPERTY_IMAGE_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type:GET_PROPERTY_IMAGE_FAILURE,
            });
        }
    };

    export const getPropertiesFor = (property_for) =>

    async (dispatch) => {

        try {
            dispatch({ type: GET_PROPERTIES_FOR__REQUEST });



            const { data } = await axios.get(`https://totallyhomerealestate.com/API/api/properties/profor/${property_for}`);


            dispatch({
                type: GET_PROPERTIES_FOR__SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type:GET_PROPERTIES_FOR__FAILURE,
            });
        }
    };