import React from 'react'
import MyProfile from './MyProfile';
import Todo from './Todo';
import UserData from './UserData';

const Home = (props) => {

  return (
    <div className="container">
      <h1>Welcome to Hooks Demo!</h1>
      <MyProfile/>
      <hr />

      <UserData />
      <hr />

      <Todo />
      <hr/>
      
      
    </div>
  )
}

export default Home;
