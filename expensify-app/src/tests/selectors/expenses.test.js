import selectExpenses from '../../selectors/expenses'
import moment from 'moment'

const data = [{
    id: '1',
    description: 'Flair',
    note: '',
    amount: 50,
    createdAt: 0
}, {
    id: '2',
    description: 'Glamour',
    note: '',
    amount: 99,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Fame',
    note: '',
    amount: 75,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

test('Testing SelectExpense', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(data, filters)
    expect(result).toEqual([
        data[2]
    ])
})

test('Testing StartDate filter', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }

    const result = selectExpenses(data, filters)
    expect(result).toEqual([
        data[2], data[0]
    ])
})

test('Testing EndDate filter', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    }

    const result = selectExpenses(data, filters)
    expect(result).toEqual([
        data[0], data[1]
    ])
})

test('Testing SortByDate filter', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(data, filters)
    expect(result).toEqual([
        data[2], data[0], data[1]
    ])
})

test('Testing SortByAmount filter', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const result = selectExpenses(data, filters)
    expect(result).toEqual([
        data[1], data[2], data[0]
    ])
})



