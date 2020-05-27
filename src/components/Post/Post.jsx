import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  const [ follow, setFollow ] = useState(false);
  const [ liked, setLiked ] = useState(false);

  const { imageUrl, comments} = postInfo;

  return (
    <article className="post" data-testid="post">
      { userInfo && 
        <header className="post__header">
          <Link to={`/users/${userInfo.username}`} className="user">
            <img className="user__thumb" src={userInfo.avatar} alt={userInfo.username}/>
            <div className="user__name">{userInfo.name}</div>
          </Link>

          <button className="post__context" type="button" onClick={() => setFollow(!follow)}>
            {follow 
              ? <span className="follow-btn is-following">seguindo</span> 
              : <span className="follow-btn">seguir</span>
            } 
          </button>
        </header> 
      }

      <section className="post__figure">
        <img src={imageUrl} alt=""/>
      </section>

      { userInfo && (
        <footer className="post__controls">
          <button className="post__control" type="button" onClick={() => setLiked(!liked)}>     
            {liked 
              ? <FaHeart className="fas fa-heart" />
              : <FiHeart /> 
            }
          </button>
          
          { userInfo && comments.length > 0 && (
            <div className="post__status">
              <div className="user">
                <span>curtido por <Link to="/">{comments[0].name}</Link> e outra{((comments.length - 1) + liked) > 1 && 's'}
                  <Link to="/"> {(comments.length - 1) + liked} pessoa{((comments.length -1) + liked) > 1 && 's'}.</Link>
                </span>
              </div>
            </div>
          )}
        </footer>   
      )}
    </article>
  );
};

export default Post;
