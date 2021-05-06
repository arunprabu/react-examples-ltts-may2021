import React, { useContext } from 'react'
import { PageContext } from '../PageContext';
import MyProfile from './MyProfile';
import Todo from './Todo';
import UserData from './UserData';

const Home = () => {

  const userStatus = useContext(PageContext);
  console.log(userStatus);

  return (
    <div>
      <h1>Welcome to Hooks Demo!</h1>
      <MyProfile/>
      <hr />

      <UserData />
      <hr />

      <Todo />
      <hr/>
      
      <h2>useContext() - Hook Demo</h2>
      <p>Is Authenticated: {userStatus.isLoggedIn? 'Yes': 'No'}</p>
      <p>Last Login: {userStatus.lastLogin}</p>

    </div>
  )
}

export default Home;
