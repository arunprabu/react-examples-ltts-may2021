import React, { useState } from 'react'

const MyProfile = () => {
  // useState() -- let you have state within fn comp
  const [ personName, setPersonName ] = useState('Arun');
  console.log(personName);
  
  const handleChangeName = () => {
    // will change the person name using setPersonName fn 
    setPersonName('John');
  }

  return (
    <div>
      <h2>My Profile | useState Demo</h2>
      <p>Person Name: {personName} </p>
      
      <button type="button" className="btn btn-primary" onClick={handleChangeName}>Change Name</button>

      <button type="button" className="btn btn-secondary" onClick={() => setPersonName('Peter')}>Change Name to Peter</button>
    </div>
  )
}

export default MyProfile
