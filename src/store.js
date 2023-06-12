import { createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from 'redux-devtools-extension'
import { userReducer } from "./reducers/userReducers";
import { propertyAmenitiesReducer, propertyDetailsReducer, propertyImagesReducer, propertyLevelReducer, propertyNearByReducer, propertyReducer, propertySubCommunityReducer } from "./reducers/propertyReducers";
import { carouselDetailsReducer, carouselReducer } from "./reducers/carouselReducers";
import { getCurrentTeamMemberReducer, teamDetailsReducer, teamReducer } from "./reducers/teamReducers";
import { apartmentCategoryReducer, apartmentCategoryRentReducer, catgoryPropertiesRentReducer, catgoryReducer, catgoryRentReducer, penthouseCategoryReducer, penthouseCategoryRentReducer, townhouseCategoryReducer, townhouseCategoryRentReducer } from "./reducers/catgoryReducres";
import { blogReducer } from "./reducers/blogReducers";
import { propertiesByTypeReducer } from "./reducers/propertyTypeReducers";
import { contactReducer } from "./reducers/contactReducer";
import { listWithUsReducer } from "./reducers/listWithUsReducer";
import { careerReducer } from "./reducers/careerReducer";
import { aboutReducer } from "./reducers/aboutReducer";
import { communityCategoryReducer, communityReducer } from "./reducers/communityReducer";
import { getOffPlanReducer, offPlanCategoryReducer } from "./reducers/offPlanReducers";
import { homePageReducer } from "./reducers/homePageReducer";
import { propertyCommunityReducer, propertyTypeReducer } from "./reducers/propertiesReducers2";

const reducer=combineReducers({
    user:userReducer,
    properties:propertyReducer,
    propertyDetails:propertyDetailsReducer,
    carousels:carouselReducer,
    carouselDetails:carouselDetailsReducer,
    team:teamReducer,
    teamDetails:teamDetailsReducer,
    categoryProperties:catgoryReducer,
    categoryPropertiesRent:catgoryPropertiesRentReducer,
    townhouseCategoryProperties:townhouseCategoryReducer,
    townhouseRentProperties:townhouseCategoryRentReducer,
    contact:contactReducer,
    listWithUs:listWithUsReducer,
    career:careerReducer,
    about:aboutReducer ,
    community:communityReducer, 


    blogs:blogReducer,

    apartmentCategoryProperties:apartmentCategoryReducer,
    apartmentCategoryRentProperties:apartmentCategoryRentReducer,
    penthouseCategoryProperties:penthouseCategoryReducer,
    penthouseCategoryRentProperties:penthouseCategoryRentReducer,

    propertiesByType:propertiesByTypeReducer,

    offPlan:getOffPlanReducer,
    propertyImages:propertyImagesReducer,
    propertiesNearBy:propertyNearByReducer,
    propertyAmenities:propertyAmenitiesReducer,
    homePage:homePageReducer,
    currentTeamMember:getCurrentTeamMemberReducer,
    offPlanCategory:offPlanCategoryReducer,
    communityCategory:communityCategoryReducer,


    propertyLevel:propertyLevelReducer,
    propertySubCommunity:propertySubCommunityReducer,
    propertyCommunity:propertyCommunityReducer,
    propertyType:propertyTypeReducer


  
    
   



})
let initailState={};
const middleware=[thunk]
const store=createStore(reducer,initailState,composeWithDevTools(applyMiddleware(...middleware))
)
export default store