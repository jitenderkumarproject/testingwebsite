import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HeaderMarquee from './HeaderMarquee';
import Footer from './Footer';
import { Carousel } from 'react-bootstrap';
import Caraousel from './Caraousel';

function App() {
  return (
    <div className="App">
      <HeaderMarquee />
      <Header />
      <Caraousel />
      <Footer />
    </div>
  );
}

export default App;
