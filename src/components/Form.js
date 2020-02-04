import React from 'react'
import { connect } from 'react-redux'
import { submitForm, setFormProp } from '../actions'

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
        placeholder="First name" 
        name="firstName"
        value={firstName} 
        onChange={handleChange} 
      />
      <br />
      <input 
        type="text" 
        placeholder="Second name"
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
  submitForm: () => dispatch(submitForm()),
  setFormProp: (name, value) => dispatch(setFormProp(name, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
