import { createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from 'redux-devtools-extension'
import { userReducer } from "./reducers/userReducers";
import { propertyDetailsReducer, propertyReducer } from "./reducers/propertyReducers";
import { carouselDetailsReducer, carouselReducer } from "./reducers/carouselReducers";
import { teamDetailsReducer, teamReducer } from "./reducers/teamReducers";
import { apartmentCategoryReducer, apartmentCategoryRentReducer, catgoryPropertiesRentReducer, catgoryReducer, catgoryRentReducer, penthouseCategoryReducer, penthouseCategoryRentReducer, townhouseCategoryReducer, townhouseCategoryRentReducer } from "./reducers/catgoryReducres";
import { blogReducer } from "./reducers/blogReducers";
import { propertiesByTypeReducer } from "./reducers/propertyTypeReducers";
import { getOffPlanReducer } from "./reducers/offPlanReducers";

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

    blogs:blogReducer,

    apartmentCategoryProperties:apartmentCategoryReducer,
    apartmentCategoryRentProperties:apartmentCategoryRentReducer,
    penthouseCategoryProperties:penthouseCategoryReducer,
    penthouseCategoryRentProperties:penthouseCategoryRentReducer,

    propertiesByType:propertiesByTypeReducer,

    offPlan:getOffPlanReducer
  
    
   



})
let initailState={};
const middleware=[thunk]
const store=createStore(reducer,initailState,composeWithDevTools(applyMiddleware(...middleware))
)
export default store