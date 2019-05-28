import {SUBMITTED, CHANGE_DATE_BEGIN, CHANGED_DATE_END, REQUEST_RESULTS_SUCCESS, REQUEST_RESULTS_FAILED} from './types.js'


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
        case REQUEST_RESULTS_FAILED:
                return {
                    ...state,
                    submitted: true,
                    results: action.payload.message
                }
        case REQUEST_RESULTS_SUCCESS:
            console.log(action.payload)
            let resultsArray = [];
            let results = JSON.parse(action.payload);
            for(let i = 0; i < results.issues.length; i++) {
                let keys = results.issues[i].key;
                let status = results.issues[i].fields.status.name;
                resultsArray.push(keys + ":" + " " + status)
            }
            return {
                ...state,
                submitted: true,
                // works results: action.payload.issues[0].key
                results:resultsArray
            }
        default:
           return state;
    }
}
