import React from 'react';
import { shallow } from 'enzyme';
import { CreateExpense } from '../../components/CreateExpense';
import expenses from '../fixtures/expenses';

let startAddExpenseSpy, historySpy, wrapper;
beforeEach(() => {
    startAddExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<CreateExpense startAddExpense={startAddExpenseSpy} history={historySpy} />);
});

test('Testing CreateExpense', () => {
    expect(wrapper).toMatchSnapshot();
})

test('Testing OnSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpenseSpy).toHaveBeenLastCalledWith(expenses[1]);
})
