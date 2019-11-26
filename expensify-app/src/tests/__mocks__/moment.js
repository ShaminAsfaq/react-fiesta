const moment = require.requireActual('moment');

const MockMoment = (timestamp = 0) => {
    return moment(timestamp);
}

export {
    MockMoment as default
}
