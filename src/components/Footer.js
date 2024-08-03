import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter bgColor='primary' className='text-white text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>About Us</h5>
            <p>
              Welcome to Service Company. We provide top-notch services to meet your needs and ensure satisfaction. Our team is dedicated to delivering exceptional quality and support.
            </p>
          </MDBCol>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>
            <ul className='list-unstyled mb-0'>
              <li><a href='/' className='text-white'>Services</a></li>
              <li><a href='/about' className='text-white'>About Us</a></li>
              <li><a href='/contact' className='text-white'>Contact</a></li>
              <li><a href='/privacy' className='text-white'>Privacy Policy</a></li>
            </ul>
          </MDBCol>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Follow Us</h5>
            <ul className='list-unstyled'>
              <li><a href='https://facebook.com' className='text-white'>Facebook</a></li>
              <li><a href='https://twitter.com' className='text-white'>Twitter</a></li>
              <li><a href='https://instagram.com' className='text-white'>Instagram</a></li>
              <li><a href='https://www.linkedin.com/in/eswar-rao-r-7285a2163/' className='text-white'>LinkedIn</a></li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Service Company. All rights reserved.
        <div className='mt-2'>
          Designed and developed by <strong>Eswar Rao Ramineni</strong>
        </div>
      </div>
    </MDBFooter>
  );
};

export default Footer;
