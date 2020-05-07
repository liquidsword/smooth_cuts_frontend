//To change our application state, we need to create
//an action that holds information for how to update
//that state. The action, combined with the previous
//state, produces an updated state.

export const updateLoginForm = (formData) => {
  return {
    type: "UPDATE_LOGIN_FORM",
    formData
  }
}

export const resetLoginForm = () => {
  return {
    type: "RESET_LOGIN_FORM",
  }
}
