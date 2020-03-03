//synchronous action creators

export const updateSignupForm = (formData) => {
  return {
    type: "UPDATE_SIGNUP_FORM",
    formData
  }
}

// async action creators

export const resetSignupForm = () => {
  return {
    type: "RESET_SIGNUP_FORM"
  }
}
