import { combineReducers } from 'redux';

const timeLoggedReducer = (isSignedIn=null, action) => {
    switch(action.type) {
        case('SIGNED_IN'):
            console.log(action)
            action.payload['signedInLogged'] = action.payload.time
            return action.payload;
        case('SIGNED_OUT'):
            if(!action.payload){
                action['payload'] = {}
                return action.payload
            } else {
                action.payload['signedOutLogged'] = action.payload.time
                return action.payload;
            }
        default:
            return {}
    }
};

export default combineReducers({
    timeLoggedReducer: timeLoggedReducer
});
