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
import StripLine from '../mc/StripLine';
import Figmatest from '../figmatest';
import { MetaTags } from "react-meta-tags";

function HomePage() {


  const showLoader = () => {
    // alert("aa");
    $(".loader").show();
  }

  return (
    <>
      {/* <button onClick={showLoader}>clik</button> */}
      <MetaTags>
        <title>Get Zenith Forex Card, Buy & Sell Foreign Currency, Transfer Money Abroad Online</title>
        <meta name="description" content="Get Forex Card or Transfer Money Abroad Online from India. Zenith Forex is India's largets foreign exchange marketplace that allows easy currency exchange, IndusInd forex cards, international remittances, and travel insurance etc." />
        <meta name="keywords" content="buy & sell foreign currency, get forex card, transfer money abroad online, India's largest foreign exchange marketplace, zero margin forex rates, money transfer service, online currency exchange, best foreign exchange" />
      </MetaTags>

      <HeaderMarquee />
      <StripLine />
      <Header />
      <StripLine />
      <Caraousel />
      {/* <Figmatest /> */}
      {/* <FeaturedCard2 />
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
      <CoockieConsent /> */}
      <Footer />
    </>
  )
}

export default HomePage
