import { SUBMIT_FORM, SET_FORM_PROP } from "../actions/types"

const initialState = {
  firstName: '',
  secondName: '',
  email: ''
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      alert(`${state.firstName} ${state.secondName}`)
      return {
        ...state,
        firstName: '',
        secondName: '',
        email: ''
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
