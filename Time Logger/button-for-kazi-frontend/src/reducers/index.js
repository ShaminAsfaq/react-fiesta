import { combineReducers } from 'redux';

const timeLoggedReducer = (isSignedIn=null, action) => {
	// console.log(action)
    if(action.type==='TIME_LOGGED'){
            return action.payload;
    }
    else return action
};

export default combineReducers({
    timeLoggedReducer: timeLoggedReducer
});
