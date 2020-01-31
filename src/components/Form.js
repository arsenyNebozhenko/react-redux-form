import React from 'react'
import { connect } from 'react-redux'
import { submitForm, updateState } from '../actions'

const Form = ({ firstName, secondName, submitForm, updateState }) => {
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
        onChange={(e) => updateState(e.target.name, e.target.value)} 
      />
      <br />
      <input 
        type="text" 
        name="secondName" 
        value={secondName}
        onChange={(e) => updateState(e.target.name, e.target.value)} 
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
  submitForm: (firstName, secondName) => dispatch(submitForm(firstName, secondName)) ,
  updateState: (name, value) => dispatch(updateState(name, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
