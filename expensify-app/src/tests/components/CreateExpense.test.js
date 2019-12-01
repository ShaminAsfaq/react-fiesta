import React from 'react';
import { shallow } from 'enzyme';
import { CreateExpense } from '../../components/CreateExpense';
import expenses from '../fixtures/expenses';

let createExpenseSpy, historySpy, wrapper;
beforeEach(() => {
    createExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<CreateExpense createExpense={createExpenseSpy} history={historySpy} />);
});

test('Testing CreateExpense', () => {
    expect(wrapper).toMatchSnapshot();
})

test('Testing OnSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(createExpenseSpy).toHaveBeenLastCalledWith(expenses[1]);
})
