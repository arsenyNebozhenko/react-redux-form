import { SUBMIT_FORM, SET_FORM_PROP } from './types'

export const submitForm = () => ({
  type: SUBMIT_FORM
})

export const setFormProp = (name, value) => ({
  type: SET_FORM_PROP,
  payload: {
    name,
    value
  }
})
