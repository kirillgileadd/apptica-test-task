import { combineReducers } from 'redux';
import {canvas} from "./canvas";
import {countries} from "./countries";
import {categories} from "./categories";


const rootReducer = combineReducers({
    countries,
    canvas,
    categories,
})

export default rootReducer