import { GET_COMMUNITY_GUIDELINES_FAILURE, GET_COMMUNITY_GUIDELINES__SUCCESS, GET_COMMUNITY_GUIDELINES__REQUEST, GET_COMMUNITY_CATEGORY__REQUEST, GET_COMMUNITY_CATEGORY__SUCCESS, GET_COMMUNITY_CATEGORY_FAILURE } from "../constants/communityConstants";


export const communityReducer = (state={community:[]}, action) =>{

switch(action.type){
    case GET_COMMUNITY_GUIDELINES__REQUEST:
        return{
            loading: true,
            community:[],
        }

        case GET_COMMUNITY_GUIDELINES__SUCCESS:
            return{
                loading: false,
                community: action.payload,
            }
        case GET_COMMUNITY_GUIDELINES_FAILURE:{
            return{
                loading: true,
                error: action.payload,
            }
        }
        default:
            return state;
}

}



export const communityCategoryReducer = (state={communityCategory:[]}, action) =>{

    switch(action.type){
        case GET_COMMUNITY_CATEGORY__REQUEST:
            return{
                loading: true,
                communityCategory:[],
            }
    
            case GET_COMMUNITY_CATEGORY__SUCCESS:
                return{
                    loading: false,
                    communityCategory: action.payload,
                }
            case GET_COMMUNITY_CATEGORY_FAILURE:{
                return{
                    loading: true,
                    error: action.payload,
                }
            }
            default:
                return state;
    }
    
    }
