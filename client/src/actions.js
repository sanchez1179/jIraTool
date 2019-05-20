import {SUBMITTED} from './types';
const INITIALIZE = 'INITIALIZE'

export const getBugz = (newDate) => {
    return({
        type: SUBMITTED,
        newDate
    })
}

export const initialize = () => {
    return({
        type: INITIALIZE,
    })
}


