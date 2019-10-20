import { combineReducers } from 'redux';

const timeLoggedReducer = (isSignedIn=null, action) => {
<<<<<<< HEAD
    switch(action.type) {
        case('SIGNED_IN'):
            console.log(action)
=======
    //  GOOD PRACTICE
    //  -------------
    switch(action.type) {
        case('SIGNED_IN'):
>>>>>>> 39d56f66782aa896d273ca2572d6c64a8f1537da
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
