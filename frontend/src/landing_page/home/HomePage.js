import React from 'react';
import Awards from './Awards';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import OpenAcc from '../OpenAcc';
import NavBar from '../NavBar';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
          <Hero/>
          <Awards/>
          <Stats/>
          <Pricing/>
          <Education/>
          <OpenAcc/>
          
        </>
     );
}

export default HomePage;