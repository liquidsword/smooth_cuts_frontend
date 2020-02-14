import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm_action.js"
import { login } from "../actions/currentUser.js"

const Login = ({ loginForm, updateLoginForm, login }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginForm,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginForm)
  }

  return (
    <form onSubmit={login}>
      <input placeholder="username" value={loginForm.username} name="username" type="text" onChange={handleInputChange} />
      <input placeholder="password" value={loginForm.password} name="password" type="text" onChange={handleInputChange} />
      <input value="Log In" type="submit"/>
    </form>
  )
}
//taking state from redux and putting it into the store via connect
//it gives me an argument coming to this component that looks like this:
// {
//   username: "liquidsword"
//   password: "torch"
// }
const mapStateToProps = state => {
  return {
    loginForm: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm })(Login)
