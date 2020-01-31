import { SUBMIT_FORM, UPDATE_STATE } from './types'

export const submitForm = (firstName, secondName) => ({
  type: SUBMIT_FORM,
  payload: {
    firstName,
    secondName
  }
})

export const updateState = (name, value) => ({
  type: UPDATE_STATE,
  payload: {
    name,
    value
  }
})
