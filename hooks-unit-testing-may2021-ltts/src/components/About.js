import React, { useContext } from 'react'
import { PageContext } from '../PageContext';
import Company from './Company/Company';


const About = () => {

  const userStatus = useContext(PageContext);

  return (
    <div>
      <h1>Welcome to My About Page!</h1>
      <p>Is Authenticated: {userStatus.isLoggedIn? 'Yes': 'No'}</p>
      <p>Last Login: {userStatus.lastLogin}</p>

      <Company companyName="Google"/>
    </div>
  )
}

export default About;
