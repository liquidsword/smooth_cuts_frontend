import React from 'react';
import { updatePost, deletePost } from '../actions/myPosts';
import { setEditFormData, resetNewPostForm } from '../actions/newPostForm';
import { connect } from 'react-redux';
import NewPostForm from './NewPostForm.js';

class EditPostFormWrapper extends React.Component {
  componentDidMount() {
    this.props.setEditFormData(this.props.post)

  }

  componentDidUpdate(prevProps) {
    this.props.post && !prevProps.post && this.props.setEditFormData(this.props.post)
  }

  componentWillUnmount() {
    this.props.resetNewPostForm()
  }

  handleSubmit = (title, content) => {
    const { updatePost, post, history } = this.props
    updatePost({ title, content, postId: post.id }, history)
  }

  render() {
    const { history, deletePost, post } = this.props
    const postId = post ? post.id : null
    return <>
              <NewPostForm editMode handleSubmit = { this.handleSubmit } />
              <br/>
              <button style={{ color: "red "}}
                onClick={() => deletePost(postId, history )}> DELETE THIS POST!</button>
          </>
  }
}

export default connect(null, { updatePost, setEditFormData, resetNewPostForm, deletePost })(EditPostFormWrapper);
