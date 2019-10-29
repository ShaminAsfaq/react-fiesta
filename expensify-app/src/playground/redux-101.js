import { createStore } from 'redux';

//  Destructuring in the parameter.
const incrementValue = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy
    }
}

const decrementValue = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    }
}

const setValue = ({ value }) => {
    return {
        type: 'SET',
        value: value
    }
}

const resetValue = () => {
    return {
        type: 'RESET'
    }
}

//  Reducers
const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET': 
            return {
                count: action.value
            };
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

console.log(store.getState());
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//  When you need to unsubscribe from store updates:
//  unsubscribe();


store.dispatch(incrementValue({
    incrementBy: 5
}));
store.dispatch(incrementValue());
store.dispatch(incrementValue());

store.dispatch(decrementValue({
    decrementBy: 3
}));

store.dispatch(resetValue());
store.dispatch(setValue({
    value: 13
}));
