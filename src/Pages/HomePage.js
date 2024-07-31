import React from 'react'
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
import GridCards from '../GridCards';
import Spinner1 from '../Spinner1';
import AnimatedComponent from '../AnimationTest';
import Test from '../AnimationTest2';


function HomePage() {
  return (
    <>
      <Caraousel />
      <HomeH1 />
      <Test /> 
      <AnimatedComponent /> 
       <IntroductionMain />
      <Introduction />
      <OurServices />
      <FluidHome />
      <OurServicesTwo />
      <OffCanvas />
      <ImageCap />
      <HomeProgressBar />
      <HomeAccordian /> 
      <PageListGroup />
      <Team />
      <VideoEmbeed />
      <GridCards />
      <FeaturedCard2 />
      <Spinner1 />
      <Borders />
      <QuoteCard />
      <Cards />
      <Featured />
      <CoockieConsent />

      </>
  )
}

export default HomePage
