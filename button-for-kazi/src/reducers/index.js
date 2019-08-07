import { combineReducers } from 'redux';

const signedInReducer = (signedInTime=null, action) => {
    if (action.type==='play') {
        return action.payload;
    }
    return signedInTime;
};

const signedOutReducer = (signedOutTime=null, action) => {
    if (action.type==='pause') {
        return action.payload;
    }
    return signedOutTime;
}

export default combineReducers({
    signedIn: signedInReducer,
    SignedOut: signedOutReducer
});


