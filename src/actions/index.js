import { SUBMIT_FORM, HANDLE_CHANGE } from './types'

export const submitForm = (firstName, secondName) => ({
  type: SUBMIT_FORM,
  payload: {
    firstName,
    secondName
  }
})

export const handleChange = (name, value) => ({
  type: HANDLE_CHANGE,
  payload: {
    name,
    value
  }
})
