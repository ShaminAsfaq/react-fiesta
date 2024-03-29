import uuid from 'uuid';
import database from '../firebase/firebase';

const addExpense = (expense) => {
    return {
        type: 'ADD_EXPENSE',
        expense
    }
}

const removeExpense = ({ id } = {} ) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
};

const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = {
            description, note, amount, createdAt
        }

        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        })
    }
}

export {
    addExpense,
    editExpense,
    removeExpense,
    startAddExpense
}



