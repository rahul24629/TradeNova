import React from 'react';
import Hero from './Hero';
import Brojkrage from './Brojkrage';
import OpenAcc from '../OpenAcc';
import { useClerk, useUser } from '@clerk/clerk-react';



function PricingPageTogether() {
  const {user}=useUser();
  const {openSignIn}=useClerk();
    return ( 
        <>
          <Hero/>
          {
            !user?<OpenAcc user={user} openSignIn={openSignIn}/>:""
          }
          <Brojkrage/>
        </>
     );
}

export default PricingPageTogether;