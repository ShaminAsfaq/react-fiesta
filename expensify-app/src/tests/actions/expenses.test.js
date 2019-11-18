import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('Testing RemoveExpense Method', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Testing EditExpense', () => {
    const action = editExpense('141', { note: 'New Note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '141',
        updates: {
            note: 'New Note'
        }
    })
})

test('Testing AddExpense', () => {
    const data = {
        description: 'Rent',
        amount: 1904411,
        createdAt: 1000,
        note: 'Fake Rent'
    }
    const action = addExpense(data);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...data,
            id: expect.any(String)
        }
    })
})


test('Testing AddExpense with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    })
})