const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
}

const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    }
};

const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    }
};

const setStartDate = (startDate) => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
}

const setEndDate = (endDate) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}


export {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setEndDate,
    setStartDate
}

