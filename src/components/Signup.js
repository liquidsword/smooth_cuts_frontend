import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm_action.js"
import { signup } from "../actions/currentUser.js"

const Signup = ({ signupFormData, updateSignupForm, signup }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="username" value={signupFormData.username} name="username" type="text" onChange={handleInputChange} />
      <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleInputChange} />
      <input value="Signup" type="submit"/>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)
