import React from 'react'
import { connect } from 'react-redux'
import { SUBMIT_FORM, HANDLE_CHANGE } from '../actions/types'

const Form = ({ firstName, secondName, submitForm, handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    submitForm()
  }

  return (
    <form onSubmit={handleSubmit} style={{textAlign: 'center', paddingTop: '64px'}}>
      <input
        type="text" 
        name="firstName"
        value={firstName} 
        onChange={({ target: { name, value }}) => handleChange(name, value)} 
      />
      <br />
      <input 
        type="text" 
        name="secondName" 
        value={secondName}
        onChange={({target: { name, value }}) => handleChange(name, value)} 
      />
      <br />
      <button>Submit</button>
    </form>
  )
}

const mapStateToProps = ({ form: { firstName, secondName } }) => ({
  firstName,
  secondName
})

const mapDispatchToProps = (dispatch) => ({
  submitForm: (firstName, secondName) => dispatch({ 
    type: SUBMIT_FORM, 
    payload: { 
      firstName, 
      secondName 
    } 
  }),
  handleChange: (name, value) => dispatch({ 
    type: HANDLE_CHANGE, 
    payload: { 
      name, 
      value 
    } 
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
