import { SUBMIT_FORM, SET_FORM_PROP } from "../actions/types"

const initialState = {
  firstName: '',
  secondName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return {
        ...state,
        firstName: '',
        secondName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    case SET_FORM_PROP:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    default:
      return state
  }
}

export default formReducer
