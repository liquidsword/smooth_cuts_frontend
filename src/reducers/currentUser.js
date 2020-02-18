export default (state = null, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.user
    case "LOGOUT_CURRENT_USER":
      return null
      break;
    default:
      return state
  }
}
