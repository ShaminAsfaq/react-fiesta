import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Testing Filters Reducer', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('Testing SortByAmount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('Testing SortByDate', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('Testing TextFilter', () => {
    const text = 'TEXT';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }

    const state = filtersReducer(undefined, action)
    expect(state.text).toBe(text)
})

test('Testing StartDate Filter', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    }

    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(startDate)
})

test('Testing EndDate Filter', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    }

    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(endDate)
})