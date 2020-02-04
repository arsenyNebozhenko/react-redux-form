import { SUBMIT_FORM, SET_FORM_PROP } from './types'

export const submitForm = (firstName, secondName) => ({
  type: SUBMIT_FORM,
  payload: {
    firstName,
    secondName
  }
})

export const setFormProp = (name, value) => ({
  type: SET_FORM_PROP,
  payload: {
    name,
    value
  }
})
