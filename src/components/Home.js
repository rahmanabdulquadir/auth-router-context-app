import React, { useContext } from 'react';
import { authContext } from '../contexts/UserContext';

const Home = () => {
  const {user} = useContext(authContext)

  return (
    <div>
      This is home for {user?.email && <span>{user.email}</span> }
    </div>
  );
};

export default Home;