//synchronous action creators
import { resetLoginForm } from './loginForm_action.js';
import { resetSignupForm } from './signupForm.js';
import { getMyPosts, clearPosts } from './myPosts.js'

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

export const login = ( credentials, history) => {
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
            dispatch(setCurrentUser(user.data))
            dispatch(getMyPosts())
            dispatch(resetLoginForm())
            history.push('/')
          }
        })
        .catch(console.log)
  }
}


export const signup = (credentials, history) => {
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
            dispatch(getMyPosts())
            dispatch(resetSignupForm())
            history.push('/')
          }
        })
        .catch(console.log)
  }
}

export const logout = event => {
  return (dispatch) => {
    dispatch(logoutCurrentUser())
    dispatch(clearPosts())
    return fetch('http://localhost:3001/api/v1/logout', {
      credentials: "include",
      method: "DELETE"
    })
  }
}
//asychronous action creators

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/get_current_user", {
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
            dispatch(getMyPosts())
          }
        })
        .catch(console.log)
  }
}
