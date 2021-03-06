import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router'

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

const ProfileRoute = () => {
  const [ name, setName ] = useState('');
  const [ id, setId ] = useState('');
  const [ avatar, setAvatar ] = useState('');
  const [ nickname, setNickname ] = useState('');
  const [ posts, setPosts ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true)
  const { username } = useParams();

  useEffect(() => {
    async function getUsers(){
      const response = await fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?search=${username}`)
      const [data] = await response.json();
      setName(data.name);
      setId(data.id);
      setAvatar(data.avatar);
      setNickname(data.username);
    }
    
    getUsers();
    }, [name, id, avatar, username]);

  useEffect(() => {
    if(id) {
      async function getPosts() {
        const response = await fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${id}/posts`)
        const data = await response.json(); 
        setPosts(data);
        setIsLoading(false);
      }
      
      getPosts();
      }
    }, [id]);

  return (
    
    <div data-testid="profile-route">
      <UserProfile name={name} avatar={avatar} username={nickname}/>

      {isLoading > 0 
          ? <Loading/>
          : <UserPosts posts={posts}/>
      }
    </div>
  );
};

export default ProfileRoute;
