import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Link, Route, Routes } from "react-router-dom";
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import PageNotFound from './Pages/PageNotFound';
import HomePage from './Pages/HomePage';
import HeaderMarquee from './HeaderMarquee';
import Login from './Dashboard/Login';
import GoogleMap from './Pages/GoogleMap';
import { StyleRoot } from 'radium';
import Career from './Pages/Career';
import Blog from './Pages/Blog';
import Faqs from './Pages/Faqs';


function App() {
  return (
    <StyleRoot>
      <HeaderMarquee />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/About" element={<AboutUs />}></Route>
        <Route path="/Career" element={<Career />}></Route>
        <Route path="/Faq" element={<Faqs/>}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Contact" element={<ContactUs />}></Route>
        <Route path="*" element={<PageNotFound />}> </Route>
        <Route path="/Login" element={<Login />}> </Route>

      </Routes>
      <Footer />
    </StyleRoot>
  );
}

export default App;
