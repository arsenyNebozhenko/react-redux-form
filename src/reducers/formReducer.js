import { SUBMIT_FORM, HANDLE_CHANGE } from "../actions/types"

const initialState = {
  firstName: '',
  secondName: ''
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      alert(`First name: ${state.firstName}, Second name: ${state.secondName}`)
      return {
        ...state,
        firstName: '',
        secondName: ''
      }
    case HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    default:
      return state
  }
}

export default formReducer
