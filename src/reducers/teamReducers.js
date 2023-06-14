import { GET_ALL_TEAM_FAILURE, GET_ALL_TEAM_REQUEST, GET_ALL_TEAM_SUCCESS, GET_CURRENT_TEAM_MEMBER_FAILURE, GET_CURRENT_TEAM_MEMBER_ID, GET_CURRENT_TEAM_MEMBER_REQUEST, GET_CURRENT_TEAM_MEMBER_SUCCESS, GET_TEAM_DETAILS_FAILURE, GET_TEAM_DETAILS_REQUEST, GET_TEAM_DETAILS_SUCCESS } from "../constants/teamConstants";

export const teamReducer = (state = { team: [] }, action) => {
    switch (action.type) {
        case GET_ALL_TEAM_REQUEST:
            return {
                loading: true,
                team: [],
            }
        case GET_ALL_TEAM_SUCCESS:
            return {
                loading: false,
                team: action.payload.data,
              
            }
        case GET_ALL_TEAM_FAILURE: {
            return {
                loading: false,
                error:true,
            }
        }
        default:
            return state;

    }
}


export const teamDetailsReducer = (state = { teamDetails: {} }, action) => {
    switch (action.type) {
        case GET_TEAM_DETAILS_REQUEST:
            return {
                loading: true,
                teamDetails: {},
            }
        case GET_TEAM_DETAILS_SUCCESS:
            return {
                loading: false,
                teamDetails: action.payload.data,
              
            }
        case GET_TEAM_DETAILS_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}


export const getCurrentTeamMemberReducer = (state = { currentTeamMember: {} }, action) => {
    switch (action.type) {
        case GET_CURRENT_TEAM_MEMBER_REQUEST:
            return {
                loading: true,
                currentTeamMember: {},
            }
        case GET_CURRENT_TEAM_MEMBER_SUCCESS:
            return {
                loading: false,
                currentTeamMember: action.payload.data,
              
            }
        case GET_CURRENT_TEAM_MEMBER_FAILURE: {
            return {
                loading: false,
                error: action.payload,
            }
        }
        default:
            return state;

    }
}


export const getCurrentTeamMemberIdReducer = (state = { currentTeamMemberId: {} }, action) => {
    switch (action.type) {
       
        case GET_CURRENT_TEAM_MEMBER_ID:
            return {
                loading: false,
                currentTeamMemberId: action.payload,
              
            }
      
        default:
            return state;

    }
}