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

function HomePage() {
  return (
    <>
      <Caraousel />
      <HomeH1 />
      <IntroductionMain />
      <Introduction />
      <OurServices />
      <FluidHome />
      <OurServicesTwo />
      <HomeProgressBar />
      <HomeAccordian /> 
      </>
  )
}

export default HomePage
