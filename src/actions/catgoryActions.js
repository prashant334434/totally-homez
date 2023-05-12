import axios from "axios";
import { CATEGORY_PROPERTIES_APARTMENT_FAILURE, CATEGORY_PROPERTIES_APARTMENT_REQUEST, CATEGORY_PROPERTIES_APARTMENT_SUCCESS, CATEGORY_PROPERTIES_FAILURE, CATEGORY_PROPERTIES_PENTHOUSE_FAILURE, CATEGORY_PROPERTIES_PENTHOUSE_REQUEST, CATEGORY_PROPERTIES_PENTHOUSE_SUCCESS, CATEGORY_PROPERTIES_REQUEST, CATEGORY_PROPERTIES_SUCCESS, CATEGORY_PROPERTIES_TOWNHOUSE_FAILURE, CATEGORY_PROPERTIES_TOWNHOUSE_REQUEST, CATEGORY_PROPERTIES_TOWNHOUSE_SUCCESS } from "../constants/categoryConstants";

export const getCatgoryProperties = (propertyCategory) =>
    async (dispatch) => {
        try {
            dispatch({ type: CATEGORY_PROPERTIES_REQUEST });

            const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/properties/type/${propertyCategory}`);


            console.log(data)

            dispatch({
                type: CATEGORY_PROPERTIES_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type:CATEGORY_PROPERTIES_FAILURE,
            });
        }
    };


    export const getTownhouseCatgoryProperties = () =>
    async (dispatch) => {
        try {
            dispatch({ type: CATEGORY_PROPERTIES_TOWNHOUSE_REQUEST });

            const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/properties/type/townhouse`);


            console.log(data)

            dispatch({
                type: CATEGORY_PROPERTIES_TOWNHOUSE_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type:CATEGORY_PROPERTIES_TOWNHOUSE_FAILURE,
            });
        }
    };



    export const getApartmentCatgoryProperties = () =>
    async (dispatch) => {
        try {
            dispatch({ type: CATEGORY_PROPERTIES_APARTMENT_REQUEST });

            const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/properties/type/apartment`);


            console.log(data)

            dispatch({
                type: CATEGORY_PROPERTIES_APARTMENT_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type:CATEGORY_PROPERTIES_APARTMENT_FAILURE,
            });
        }
    };




    export const getPenthouseCatgoryProperties = () =>
    async (dispatch) => {
        try {
            dispatch({ type: CATEGORY_PROPERTIES_PENTHOUSE_REQUEST });

            const  {data}  = await axios.get(`https://totallyhomerealestate.com/API/api/properties/type/penthouse`);


            console.log(data)

            dispatch({
                type: CATEGORY_PROPERTIES_PENTHOUSE_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type:CATEGORY_PROPERTIES_PENTHOUSE_FAILURE,
            });
        }
    };