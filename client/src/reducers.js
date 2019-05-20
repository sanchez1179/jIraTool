import {SUBMITTED} from './types.js'
const INITIALIZE = 'INITIALIZE'

const initialState = {
    dateBegin: '',
    dateEnd: '',
    submitted: 'truish'
}

export const getBugs = (state = initialState, action) =>{
    console.log(action);
    switch(action.type) {
        case SUBMITTED:
            console.log('hello')
            return Object.assign({}, state,)
            break;
        case INITIALIZE:
            console.log('wtf')
        default:
           return state;
    }
}
