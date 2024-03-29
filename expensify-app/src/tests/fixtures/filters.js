import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const altFilters = {
    text: 'bills',
    sortBy: 'amoung',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
};

export {
    filters,
    altFilters
}

