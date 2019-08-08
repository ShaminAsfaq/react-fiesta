import { combineReducers } from 'redux';

const signedInReducer = (signedInTime=null, action) => {
    // console.log(action)
    if(action.type==='TIME_LOGGED'){
        if (action.payload.icon==='play icon') {
            return action.signedInTime;
        }
    }
    return signedInTime;
};

const signedOutReducer = (signedOutTime=null, action) => {
    if(action.type==='TIME_LOGGED'){
        if (action.payload.con==='pause icon') {
            return action.signedOutTime;
        }
    }
    return signedOutTime;
}

export default combineReducers({
    signedIn: signedInReducer,
    signedOut: signedOutReducer
});


