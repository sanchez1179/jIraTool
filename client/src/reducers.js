import {SUBMITTED, CHANGE_DATE_BEGIN, CHANGED_DATE_END} from './types.js'


const initialState = {
    dateBegin: '',
    dateEnd: '',
    submitted: false
}

export const getBugs = (state = initialState, action) =>{
    console.log(action)
    switch(action.type) {
        case CHANGE_DATE_BEGIN:
          return {
            ...state,
            dateBegin: action.newDate
          }
          case CHANGED_DATE_END:
            return {
              ...state,
              dateEnd: action.newDate
            }
            case SUBMITTED:
              return {
                ...state,
                submitted: true
              }
        default:
           return state;
    }
}
