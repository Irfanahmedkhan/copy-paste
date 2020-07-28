import { createStore } from 'redux';
import {Page1 , Page2} from './reducers';
import { combineReducers } from "redux"

const reducers = combineReducers({
    Page1 : Page1,
    Page2: Page2
})



const store = createStore(reducers);

export default store;