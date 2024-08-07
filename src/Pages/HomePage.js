import React, { useEffect } from 'react'
import { Carousel } from 'react-bootstrap';
import Caraousel from '../Caraousel';
import Introduction from '../Introduction';
import IntroductionMain from '../IntroductionMain';
import OurServices from '../OurServices';
import OurServicesTwo from '../OurServicesTwo';
import FluidHome from '../FluidHome';
import HomeH1 from '../HomeH1';
import HomeProgressBar from '../ProgressBar';
import HomeAccordian from '../HomeAccordian';
import CoockieConsent from '../CoockieConsent';
import OffCanvas from '../OffCanvas';
import VideoEmbeed from './VideoEmbeed';
import Team from '../Team';
import PageListGroup from '../ListGroup';
import Featured from '../Featured';
import QuoteCard from '../QuoteCard';
import FeaturedCard2 from '../FeaturedCard2';
import ImageCap from '../ImageCap';
import Cards from '../Cards';
import Borders from '../Borders';
import Spinner1 from '../Spinner1';
import AnimatedComponent from '../AnimationTest';
import Test from '../AnimationTest2';
import HomeIntro1 from '../HomeIntro1';
import Header from '../Header';
import Footer from '../Footer';
import HeaderMarquee from '../HeaderMarquee'
import $ from "jquery";

function HomePage() {


  const showLoader = () => {
    // alert("aa");
    $(".loader").show();
  }

  return (
    <>
      <button onClick={showLoader}>clik</button>
      <HeaderMarquee />
      <Header />
      <Caraousel />
      <FeaturedCard2 />
      <HomeIntro1 />
      <OurServices />
      <IntroductionMain />
      <OurServicesTwo />
      <ImageCap />
      <HomeProgressBar />
      <HomeAccordian />
      <PageListGroup />
      <OffCanvas />
      <Team />
      <VideoEmbeed />
      <Spinner1 />
      <Borders />
      <QuoteCard />
      <Cards />
      <Featured />
      <Introduction />

      <HomeH1 />
      <Test />
      <AnimatedComponent />
      <CoockieConsent />
      <Footer />
    </>
  )
}

export default HomePage
