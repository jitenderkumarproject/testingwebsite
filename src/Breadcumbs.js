import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Image from 'react-bootstrap/Image';

function Breadcumbs() {
  return (
    <>
    <Image src="assests/images/banner3.svg" width={'100%'} height={300}/>
    <Breadcrumb>
    
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
    </>
  );
}

export default Breadcumbs
