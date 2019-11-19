import moment from 'moment';

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

export {
    data as default
}