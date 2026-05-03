import React from 'react';
import Awards from './Awards';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import OpenAcc from '../OpenAcc';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { useClerk, useUser } from '@clerk/clerk-react';


function HomePage() {
  const {user}= useUser();
  const {openSignIn}= useClerk();
    return ( 
        <>
          <Hero user={user} openSignIn={openSignIn}/>
          <Awards/>
          <Stats/>
          <Pricing user={user} openSignIn={openSignIn}/>
          <Education/>
          {
            !user?<OpenAcc user={user} openSignIn={openSignIn}/>:""          }
          
        </>
     );
}

export default HomePage;