import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => (
  <div className="container" data-testid="posts">
    <div className="feed">
      {posts.length > 0 && posts.map(post => (
        <Post
          key={post.id} 
          postInfo={post} 
          userInfo={getUserHandler(post.userId)}
          />
      ))}
    </div>
  </div>
);

export default Posts;
