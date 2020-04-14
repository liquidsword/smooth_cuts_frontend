//synchronous actions

export const updateNewPostForm = (name, value) => {
  return {
    type: "UPDATE_NEW_POST_FORM",
    formData: { name, value }
  }
}

export const resetNewPostForm = () => {
  return {
    type: "RESET_NEW_POST_FORM"
  }
}

export const setEditFormData = post => {
  const postFormData ={
    title: post.attributes.title,
    content: post.attributes.content
  }
  return {
    type: "SET_EDIT_FORM_DATA",
    postFormData
  }
}
