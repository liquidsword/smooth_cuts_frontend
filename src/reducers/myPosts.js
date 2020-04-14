const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_POSTS":
      return action.posts
    case 'ADD_POST':
      return state.posts.concat(action.posts)
    case 'UPDATE_POST':
      return state.map(post => post.id === action.post.id ? action.post : post)
    case "DELETE_POST":
      return state.filter(post => post.id === action.postId ? false : true )
    case "CLEAR_POSTS":
      return initialState
    default:
      return state
  }
}
