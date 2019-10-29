import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({ 
    description = '',
    note = '',
    amount = 0,
    createdAt = 0 } = {}
) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}

const removeExpense = ({ id } = {} ) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                return id!==action.id
            });
        default:
            return state;
    }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}


const store = createStore(
    combineReducers({
        expense: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({
    description: 'Payback',
    amount: 100
}));

const expenseTwo = store.dispatch(addExpense({
    description: 'Coffee',
    amount: 300
}));

console.log(expenseOne);
store.dispatch(removeExpense({
    id: expenseOne.expense.id
}));


const demoState = {
    expenses: [
        {
            id: 'aiwoes',
            description: 'Payback',
            note: 'This is the payback of the previous loan.',
            amount: 50000,
            createdAt: 0
        }
    ],
    filters: {
        text: 'payback',
        sortBy: 'amount', //   date or amount
        startDate: undefined,
        endDate: undefined
    }
};






