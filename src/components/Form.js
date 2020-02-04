import React from 'react'
import { connect } from 'react-redux'
import { SUBMIT_FORM, SET_FORM_PROP } from '../actions/types'

const Form = ({ firstName, secondName, submitForm, setFormProp }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    submitForm()
  }

  const handleChange = ({ target: { name, value } }) => {
    setFormProp(name, value)
  }

  return (
    <form onSubmit={handleSubmit} style={{textAlign: 'center', paddingTop: '64px'}}>
      <input
        type="text" 
        name="firstName"
        value={firstName} 
        onChange={handleChange} 
      />
      <br />
      <input 
        type="text" 
        name="secondName" 
        value={secondName}
        onChange={handleChange} 
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
  setFormProp: (name, value) => dispatch({ 
    type: SET_FORM_PROP, 
    payload: { 
      name, 
      value 
    } 
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
