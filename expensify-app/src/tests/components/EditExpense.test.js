import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpense } from '../../components/EditExpense';

let editExpenseSpy, removeExpenseSpy, history, wrapper;

beforeEach(() => {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpense 
                            editExpense={editExpenseSpy}
                            removeExpense={removeExpenseSpy}
                            history={history}
                            expense={expenses[2]}
                        />
                    );
})

test('Testing EditExpense Render', () => {
    expect(wrapper).toMatchSnapshot();
})

test('Testing EditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpenseSpy).toHaveBeenCalledWith(expenses[2].id, expenses[2]);
})

test('', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpenseSpy).toHaveBeenCalledWith({
        id: expenses[2].id
    });
})