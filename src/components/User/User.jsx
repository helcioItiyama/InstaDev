import React from 'react';

import { Link } from 'react-router-dom';

const User = ({ infoUser })  => {
  const {avatar, name, username, } = infoUser;

  return (
    <article className="post" data-testid="user">
      <header className="post__header">
          <Link to={`/users/${username}`} className="user">
            <div className="user__thumb">
              {avatar 
                ? <img src={avatar} alt={username}/>
                : <img src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png" 
                alt={username}/>
              }
             </div>
          </Link>
        
        <div className="user__name">{name}</div>
      </header>
    </article>
  )
};

export default User;
