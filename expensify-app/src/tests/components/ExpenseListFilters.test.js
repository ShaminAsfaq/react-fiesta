import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilterSpy, sortByDateSpy, sortByAmountSpy, setStartDateSpy, setEndDateSpy, wrapper;

beforeEach(() => {
    setTextFilterSpy = jest.fn();
    sortByDateSpy = jest.fn();
    sortByAmountSpy = jest.fn();
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
                            filters={filters}
                            setTextFilter={setTextFilterSpy}
                            sortByDate={sortByDateSpy}
                            sortByAmount={sortByAmountSpy}
                            setStartDate={setStartDateSpy}
                            setEndDate={setEndDateSpy}
                        />)
})

test('Testing ExpenseListFilters Render', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Testing ExpenseListFilters with Alt data', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
});

test('Testing SetTextFilter', () => {
    const value = 'rent';
    wrapper.find('input').simulate('change', {
        target: value
    });
    expect(setTextFilterSpy).toHaveBeenLastCalledWith(value);
})


/**
 * Below TWO tests are not working :(
 */
test('Testing SortByDate', () => {
    const value = 'date'
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', {
        target: value
    })
    expect(sortByDateSpy).toHaveBeenCalled();
})

test('Testing SortByAmount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: value
    })
    expect(sortByAmountSpy).toHaveBeenCalled();
})

/**
 * The TWO tests above isn't working :(
 */

test('Testing DateChange', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate, endDate
    })
    expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate)
    expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate)
})

test('Testing DateFocusChange', () => {
    const calenderFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused);
    expect(wrapper.state('calendarFocused')).toBe(calenderFocused)
})


