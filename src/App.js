import logo from './logo.svg';
import './App.css';
import './CSS/Home.css';
// import './CSS/IntroductionMainCard.css';
import './CSS/testing.scss'

import { Link, Route, Routes } from "react-router-dom";
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import PageNotFound from './Pages/PageNotFound';
import HomePage from './Pages/HomePage';

import Login from './Dashboard/Login';
import GoogleMap from './Pages/GoogleMap';
import { StyleRoot } from 'radium';
import Career from './Pages/Career';
import Blog from './Pages/Blog';
import Faqs from './Pages/Faqs';
import React, { useState, useEffect } from 'react';
import Spinner1 from './Spinner1';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mcss/spinner.css'


function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <StyleRoot>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/About" element={<AboutUs />}></Route>
          <Route path="/Career" element={<Career />}></Route>
          <Route path="/Faq" element={<Faqs />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/Contact" element={<ContactUs />}></Route>
          <Route path="/Login" element={<Login />}> </Route>
          <Route path="*" element={<PageNotFound />}> </Route>
        </Routes>

      </StyleRoot>
    </div>
  );
}

export default App;
