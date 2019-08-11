import { combineReducers } from "redux";
import {reducer as FormReducer} from 'redux-form';
import TestReducer from "../text/TestReducer";
import eventReducer from "../event/eventReducer";

const rootReducer = combineReducers({
    form: FormReducer,
    test: TestReducer,
    events: eventReducer


})
export default rootReducer;