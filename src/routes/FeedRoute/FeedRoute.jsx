import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [ users, setUsers ] = useState([]);
  const [ posts, setPosts ] = useState([]);
  const [ stories, setStories ] = useState([]);
  const [ index, setIndex ] = useState(0)

  useEffect(() => {
    async function getUsers() {
      const response = await fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users');
      const data = await response.json();
      setUsers(data);
    }
    getUsers();
  }, [])


  useEffect(() => {
    if(index === users.length) {
      return;
    }
    async function getPosts() {
      const response = await fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[index].id}/posts`);
      const data = await response.json();
      setPosts([...posts, ...data]);
      setIndex(index + 1);
    }
      getPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, users])

  useEffect(() => {
    async function getStories() {
      const response = await fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories');
      const data = await response.json();
      setStories(data);
    }
    getStories()
  }, [])

  const getPostbyUserId = postById => users.find(user => postById === user.id);
  
  return (
    <div data-testid="feed-route">
      {(users.length > 0 && stories.length > 0) && 
        <Stories stories={stories} getUserHandler={getPostbyUserId}/>
      }

      {users.length !== index 
        ? <Loading />
        : <Posts posts={posts} getUserHandler={getPostbyUserId}/>
      }
    </div>
  );
};

export default FeedRoute;
