import {SUBMITTED, CHANGE_DATE_BEGIN, CHANGED_DATE_END, REQUEST_RESULTS_FAILED, REQUEST_RESULTS_SUCCESS} from './types';

export const updateBeginDate = (newDate) => ({
  type: CHANGE_DATE_BEGIN,
  newDate
});

export const updateEndDate = (newDate) => ({
  type: CHANGED_DATE_END,
  newDate
});

export const submit = (newDate) => {
    return dispatch => {
        dispatch({type: SUBMITTED})
        return fetch(`https://cors-anywhere.herokuapp.com/https://masterstream.atlassian.net/rest/api/2/search?jql=issuetype%20in%20("App%20Error"%2C%20"Hot%20Fix")%20AND%20created%20>%3D%20${newDate.dateBegin}%20AND%20created%20<%20${newDate.dateEnd}%20AND%20(resolution%20not%20in%20("Task%20cancelled"%2C%20"Cannot%20Reproduce"%2C%20"No%20Fix%20is%20Required")%20OR%20resolution%20is%20EMPTY)%20AND%20"Scope%20of%20change"%20%3D%20"Public"%20AND%20"QA%20Lead"%20!%3D%20unknown%20ORDER%20BY%20issuetype%2C%20"Scope%20of%20change"%2C%20status%2C%20resolution`,
            {method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Basic aXNhbmNoZXpAbXNlcnAuY29tOnZwQjJIOUpudHhUZ2VlYVY2dzdFREMwQw=='
            }
            })
            .then(response => response.text())
            .then(data => dispatch({ type: REQUEST_RESULTS_SUCCESS, payload: data }))
}}
