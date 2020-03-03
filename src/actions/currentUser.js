//synchronous action creators
import { resetLoginForm } from './loginForm_action.js'
import { resetSignupForm } from './signupForm.js'

export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const logoutCurrentUser = () => {
  return {
    type: "LOGOUT_CURRENT_USER"
  }
}

export const login = credentials => {
  console.log("credentials are", credentials)
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
        .then(r => r.json())
        .then(user => {
          if (user.error) {
            alert(user.error)
          } else {
            dispatch(setCurrentUser(user))
          }
        })
        .catch(console.log)
  }
}


export const signup = credentials => {
  return dispatch => {
    const userInfo = {
      user: credentials
    }
    return fetch("http://localhost:3001/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
        .then(r => r.json())
        .then(user => {
          if (user.error) {
            alert(user.error)
          } else {
            dispatch(setCurrentUser(user))
            dispatch(resetSignupForm())
          }
        })
        .catch(console.log)
  }
}


export const logout = () => {
  return (dispatch) => {
    dispatch(logoutCurrentUser())
    return fetch('http://localhost:3001/api/v1/logout', {
      credentials: "include",
      method: "DELETE"
    })
  }
}
//asychronous action creators



export const getCurrentUser = () => {
  console.log("DISPATCHING GET CURRENT USER")
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/get_current_user', {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
        .then(r => r.json())
        .then(user => {
          if (user.error) {
            alert(user.error)
          } else {
            dispatch(setCurrentUser(user.data))
          }
        })
        .catch(console.log)
  }
}
