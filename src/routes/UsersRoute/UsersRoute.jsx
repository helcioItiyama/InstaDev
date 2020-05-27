import React, { useState, useEffect } from 'react';

import UsersList from '../../containers/UsersList/UsersList';

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    async function getUsers() {
      const response = await fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
      const data = await response.json();
      setUsers(data)
    }
    
    getUsers();
  }, [])

  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users}/>
    </div>
  );
};

export default UsersRoute;
 