import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import About from './landing_page/about/AboutPage';
import Product from './landing_page/products/Productpage';
import Pricing from './landing_page/pricing/PricingPageTogether';
import SupportPage from './landing_page/support/SupportPage';

import NavBar from './landing_page/NavBar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';

import { StrictMode } from 'react'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your VITE_CLERK_PUBLISHABLE_KEY to the .env file");
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/support' element={<SupportPage/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);

