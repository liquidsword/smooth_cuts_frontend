//synchronous actions

export const setMyPosts = posts => {
  return {
    type: "SET_MY_POSTS",
    trips
  }
}

export const clearPosts = () => {
  return {
    type: "CLEAR_POSTS"
  }
}

//async actions
export const getMyPosts = () => {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/posts", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
          .then(r => r.json())
          .then(response => {
            if (response.error) {
              alert(response.error)
            } else {
              console.log(response.data)
              dispatch(setMyPosts([response.data]))
            }
          })
          .catch(console.log)
  }
}
