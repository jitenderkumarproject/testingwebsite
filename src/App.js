import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Link, Route, Routes} from "react-router-dom";
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import PageNotFound from './Pages/PageNotFound';
import HomePage from './Pages/HomePage';
import HeaderMarquee from './HeaderMarquee';
import Login from './Dashboard/Login';
import GoogleMap from './Pages/GoogleMap';


function App() {
  return (
    <div className="App">
      <HeaderMarquee />
      <Header />
    
      <Routes>
        <Route path="/" element = {<HomePage />}></Route>
        <Route path="/About" element = {<AboutUs />}></Route>
        <Route path="/Contact" element ={<ContactUs />}></Route>
        <Route path="*" element ={<PageNotFound />}> </Route>
        <Route path="/Login" element ={<Login />}> </Route>
       
      </Routes>
      <Footer />
      
       
      
    </div>
  );
}

export default App;
