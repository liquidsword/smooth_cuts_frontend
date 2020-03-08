//synchronous actions

export const updateNewPostForm = (name, value) => {
  return {
    type: "UPDATE_NEW_POST_FORM",
    formData: { name, value }
  }
}
