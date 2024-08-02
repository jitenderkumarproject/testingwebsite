import React from 'react'
import GoogleMap from './GoogleMap'
// import ContactForm from '../LeadForm'
import Breadcumbs from '../Breadcumbs'
import ContactForm from './ContactForm'
import { Container } from 'react-bootstrap'

function ContactUs() {
  return (
    <>
    <Breadcumbs />
    <div>
     
      <Container>
        <row>
        <GoogleMap />
        </row>
        <row>
        <ContactForm />
        </row>
      </Container>
     
    </div>
    </>
  )
}

export default ContactUs
