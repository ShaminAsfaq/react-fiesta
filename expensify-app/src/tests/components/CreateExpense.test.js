import React from 'react';
import { shallow } from 'enzyme';
import { CreateExpense } from '../../components/CreateExpense';
import expenses from '../fixtures/expenses';

let onSubmitSpy, historySpy, wrapper;
beforeEach(() => {
    onSubmitSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<CreateExpense onSubmit={onSubmitSpy} history={historySpy} />);
});

test('Testing CreateExpense', () => {
    expect(wrapper).toMatchSnapshot();
})

test('Testing OnSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[1]);
})
