import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator } from "../../../reducers/profileReducer";

const MyPosts = (props) => {

  let postsElements = props.posts
    .map(post => <Post message = {post.message} likesCount = {post.likesCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
      props.addPost();
  }

  let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
  }

	return  <div className = {s.postsBlock}>
          	<h3>My posts</h3>
         	  <div>
              <div>
          		  <textarea onChange = {onPostChange} ref ={newPostElement} value = {props.newPostText} />
              </div>
              <div>
                <button onClick = {addPost} >Add post</button>
                <button>Remove</button>
              </div>
          	</div>
          	<div className = {s.posts}>
              { postsElements }
          	</div>
          </div>
}

export default MyPosts;

