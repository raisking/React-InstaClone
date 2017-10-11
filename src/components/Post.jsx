import React, { Component } from 'react';
import Comment from './Comment';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'
import styled from 'styled-components';

const Bar = styled.div`

  background-color: #ccc;
  width: 50%;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid black;  
  padding: 20px;
  
`
const Items = styled.div`
  border: 1xp solid red;
  margin: 0 auto;
  display: block;
  justify-content: center;
  align-items: center;
  padding: 10px;  
 
`
class Post extends Component {

  render() {
    const { post } = this.props;
    return (
      <Bar>
        <div>
          <Items>
          <div>
            <img src={post.user.profile_pic} alt={post.user.username} />
            <p>{post.user.username}</p>
          </div>
          </Items>
          <Items>
          <div>
            <img src={post.image.url} />
            <p>{post.caption}</p>
          </div>
          </Items>
          <Items>
          <div>
            <FaHeartO />
            <FaCommentO />
          </div>
          </Items>
          <Items>
          <p>{post.likes.length} likes</p>
          {post.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
        </Items>
        </div>
      </Bar>
    )
  }
}

export default Post;