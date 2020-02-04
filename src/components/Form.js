import React from 'react'
import { connect } from 'react-redux'
import { submitForm, setFormProp } from '../actions'
import styled, { css } from 'styled-components'

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
  display: block;
  font-size: 1.5rem;
  padding: .5rem;
  margin-bottom: 0.5rem;
  ${props => props.type === 'checkbox' && css`
    display: inline-block;
  `}
  &:last-child {
    margin-bottom: 1rem;
  }
`

const Label = styled.label`

`

const Button = styled.button`
  font-size: 1.5rem;
  display: block;
  cursor: pointer;
`

const Form = ({ firstName, secondName, email, password, confirmPassword, accept, submitForm, setFormProp }) => {
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
      <Label htmlFor="accept">
        <Input 
          type="checkbox"
          name="accept"
          checked={accept}
          id="accept"
          onChange={({ target: { name } }) => setFormProp(name, !accept)}
        />
        I accept Terms of Use & Privacy Policy.
      </Label>
      <Button>Submit</Button>
    </Container>
  )
}

const mapStateToProps = ({ form: { firstName, secondName, email, password, confirmPassword, accept } }) => ({
  firstName,
  secondName,
  email,
  password,
  confirmPassword,
  accept
})

const mapDispatchToProps = (dispatch) => ({
  submitForm: () => dispatch(submitForm()),
  setFormProp: (name, value) => dispatch(setFormProp(name, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
