const initialState = {
  title: "",
  content: ""
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_POST_FORM":
    const returnVal = {
        ...state,
        [action.formData.name]: action.formData.value
      }
      return returnVal

    case "RESET_NEW_POST_FORM":
      return initialState
    case "SET_EDIT_FORM_DATA":
      return action.postFormData
      
    default:
      return state

  }
}
