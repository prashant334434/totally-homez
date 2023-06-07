
import { GET_OFFPLAN_CATEGORY_FAILURE, GET_OFFPLAN_CATEGORY_REQUEST, GET_OFFPLAN_CATEGORY_SUCCESS, GET_OFF_PLAN_FAIL, GET_OFF_PLAN_REQUEST, GET_OFF_PLAN_SUCCESS } from "../constants/offPlanConstants";



export const getOffPlanReducer = (state = { offPlan: [] }, action) => {
    switch (action.type) {
        case GET_OFF_PLAN_REQUEST:
            return {
                loading: true,
                offPlan: [],
            }
        case GET_OFF_PLAN_SUCCESS:
            return {
                loading: false,
                offPlan: action.payload,
              
            }
        case GET_OFF_PLAN_FAIL: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}





export const offPlanCategoryReducer = (state = { offPlanCategory: [] }, action) => {
    switch (action.type) {
        case GET_OFFPLAN_CATEGORY_REQUEST:
            return {
                loading: true,
                offPlanCategory: [],
            }
        case GET_OFFPLAN_CATEGORY_SUCCESS:
            return {
                loading: false,
                offPlanCategory: action.payload,
              
            }
        case GET_OFFPLAN_CATEGORY_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}