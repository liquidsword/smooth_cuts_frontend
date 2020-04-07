import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const MyPosts = props => {
  const postCards = props.posts.length > 0 ?
    props.posts.map(c => (<p key={c.id}><Link to={`/posts/${c.id}`}>{c.attributes.title}</Link></p>)) : null

  return postCards

}

const mapStateToProps = state => {
  return {
    posts: state.myPosts
  }
}
//we provide mapStateToProps to Redux in order to tell Redux:
//to please provide us access to your state so that we can pick and choose
//the pieces of state we would like available to this particular component as props
export default connect(mapStateToProps)(MyPosts)
