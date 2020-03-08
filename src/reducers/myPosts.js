export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_POSTS":
      return action.trips
    case "CLEAR_POSTS":
      return []
    default:
      return state
  }
}
