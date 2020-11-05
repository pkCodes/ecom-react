import React from 'react';

export default function InfoSection(props) {
  return (
    <div className='footer-info-section mt-4 mb-4 w-100 flex-row-sb-cen'>
      <div className='contact-us'>
        <div className='addr-ln-1'>Address: Line 1, Line 2</div>
        <div className='addr-city'>Bangalore, Karnataka</div>

        <div className='social-links'>Bangalore, Karnataka</div>
      </div>
      <div className='infomation'>
        <div className='about-us'>Abount</div>
        <div className='delivery-info'>Delivery Information</div>
        <div className='privacy-policy'>Privacy Policy</div>
        <div className='faqs'>FAQs</div>
      </div>
      <div className='my-account'>
        <div className='addresses'>My Addresses</div>
        <div className='orders'>My Orders</div>
        <div className='cart'>My Cart</div>
      </div>
    </div>
  );
}
