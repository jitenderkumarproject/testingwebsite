import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HeaderMarquee from './HeaderMarquee';
import Footer from './Footer';
import { Carousel } from 'react-bootstrap';
import Caraousel from './Caraousel';
import Introduction from './Introduction';
import IntroductionMain from './IntroductionMain';
import OurServices from './OurServices';
import OurServicesTwo from './OurServicesTwo';
import FluidHome from './FluidHome';
import HomeH1 from './HomeH1';
import HomeProgressBar from './ProgressBar';
import HomeAccordian from './HomeAccordian';

function App() {
  return (
    <div className="App">
      <HeaderMarquee />
      <Header />
      <Caraousel />
      <HomeH1 />
      <IntroductionMain />
      <Introduction />
      <OurServices />
      <FluidHome />
      <OurServicesTwo />
      <HomeProgressBar />
      <HomeAccordian />
      <Footer />
    </div>
  );
}

export default App;
