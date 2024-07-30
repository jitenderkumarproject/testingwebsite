import React from 'react'
import GoogleMap from './GoogleMap'
// import ContactForm from '../LeadForm'
import Breadcumbs from '../Breadcumbs'
import ContactForm from './ContactForm'

function ContactUs() {
  return (
    <>
    <Breadcumbs />
    <div>
      <h1> This is a Contact Us Page</h1>
      <table>
        <tr>
          <td>
          <GoogleMap />
          </td>
          <td>
          <ContactForm />
          </td>
        </tr>
      </table>

      
    </div>
    </>
  )
}

export default ContactUs
