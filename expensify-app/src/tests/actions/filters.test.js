import { 
    setStartDate, 
    setEndDate,
    setTextFilter,
    sortByDate,
    sortByAmount
} from '../../actions/filters';

import moment from 'moment'

test('Testing SetStartDate', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})


test('Testing SetEndDate', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('Testing SetTextFilter', () => {
    const action = setTextFilter('Filter');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Filter'
    })
})

test('Testing SetTextFilter with default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('Testing SortByDate', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    })
})

test('Testing SortByAmount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    })
})


