import React from 'react';

import Post from '../../components/Post';

import './UserPosts.scss';

const UserPosts = ({ posts }) => (
  <div className="container" data-testid="user-posts"> 
    <div className="user-posts">
     {posts.length > 0 
      ? posts.map(post =>(
        <Post key={post.id} postInfo={post} />
        ))
      : (
        <div className="no-posts">
          <span className="no-posts__content">Não há publicações deste usuário</span>
          <span className="no-posts__emoji" role="img" aria-label="sad emoji">😥</span> 
        </div>
      )}
      </div>
  </div>
);

export default UserPosts;
