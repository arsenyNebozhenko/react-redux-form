import React from 'react'
import { connect } from 'react-redux'
import { submitForm, setFormProp } from '../actions'
import styled from 'styled-components'

const Container = styled.form`
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`

`

const Input = styled.input`
  text-align: center;
  display: block;
  font-size: 1.5rem;
  padding: .5rem;
`

const Button = styled.button`
  display: block;
`

const Form = ({ firstName, secondName, email, password, confirmPassword, submitForm, setFormProp }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    submitForm()
  }

  const handleChange = ({ target: { name, value } }) => {
    setFormProp(name, value)
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Title>Register</Title>
      <Input
        type="text"
        placeholder="First Name" 
        name="firstName"
        value={firstName} 
        onChange={handleChange} 
      />
      <Input 
        type="text" 
        placeholder="Second Name"
        name="secondName" 
        value={secondName}
        onChange={handleChange} 
      />
      <Input 
        type="email" 
        placeholder="Email"
        name="email" 
        value={email}
        onChange={handleChange} 
      />
      <Input 
        type="password" 
        placeholder="Password"
        name="password" 
        value={password}
        onChange={handleChange} 
      />
      <Input 
        type="password" 
        placeholder="Confirm Password"
        name="confirmPassword" 
        value={confirmPassword}
        onChange={handleChange} 
      />
      <Button>Submit</Button>
    </Container>
  )
}

const mapStateToProps = ({ form: { firstName, secondName, email } }) => ({
  firstName,
  secondName,
  email
})

const mapDispatchToProps = (dispatch) => ({
  submitForm: () => dispatch(submitForm()),
  setFormProp: (name, value) => dispatch(setFormProp(name, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
