const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_POSTS":
      return action.posts
    case 'ADD_POST':
      return state.posts.concat(action.posts)
    case "CLEAR_POSTS":
      return initialState
    default:
      return state
  }
}
