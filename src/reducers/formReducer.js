import { UPDATE_STATE, SUBMIT_FORM } from "../actions/types"

const initialState = {
  firstName: '',
  secondName: ''
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      alert(`First name: ${state.firstName}, Second name: ${state.secondName}`)
      return state
    case UPDATE_STATE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    default:
      return state
  }
}

export default formReducer
