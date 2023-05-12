import { createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from 'redux-devtools-extension'
import { userReducer } from "./reducers/userReducers";
import { propertyDetailsReducer, propertyReducer } from "./reducers/propertyReducers";
import { carouselDetailsReducer, carouselReducer } from "./reducers/carouselReducers";
import { teamDetailsReducer, teamReducer } from "./reducers/teamReducers";
import { apartmentCategoryReducer, catgoryReducer, penthouseCategoryReducer, townhouseCategoryReducer } from "./reducers/catgoryReducres";

const reducer=combineReducers({
    user:userReducer,
    properties:propertyReducer,
    propertyDetails:propertyDetailsReducer,
    carousels:carouselReducer,
    carouselDetails:carouselDetailsReducer,
    team:teamReducer,
    teamDetails:teamDetailsReducer,
    categoryProperties:catgoryReducer,
    townhouseCategoryProperties:townhouseCategoryReducer,
    apartmentCategoryProperties:apartmentCategoryReducer,
    penthouseCategoryProperties:penthouseCategoryReducer
    
   



})
let initailState={};
const middleware=[thunk]
const store=createStore(reducer,initailState,composeWithDevTools(applyMiddleware(...middleware))
)
export default store