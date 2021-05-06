import React, { useState, useEffect } from 'react';

const UserData = () => {
  const [ topicName, setTopicName ] = useState('Welcome to Hooks');

  // useEffect is like componentDidMount, componentDidUpdate to class comp
  useEffect(() => {
    console.log('Inside useEffect');
    document.title = topicName;
  }, [topicName]); // second arg is dependency // remove the dep and keep empty array and see the o/p
  // if the dep is changed any any means, useEffect callback will be called 
  // by default useEffecct will be called once automatically

  return (
    <div>
      <h2>User Data | useEffect Demo</h2>
      <p>Topic Name: {topicName }</p>

      <input type="text" value={topicName} 
      onChange={ (e) => setTopicName(e.target.value) } />

    </div>
  )
}

export default UserData;
