import {SUBMITTED, CHANGE_DATE_BEGIN, CHANGED_DATE_END} from './types';

export const updateBeginDate = (newDate) => ({
  type: 'CHANGE_DATE_BEGIN',
  newDate
})

export const updateEndDate = (newDate) => ({
  type: 'CHANGED_DATE_END',
  newDate
})

export const submit = () => ({
  type: 'SUBMITTED'
})
