import React from 'react';

import Hr from '../Hr';
import Brands from './Brands';
import CopyRights from './CopyRights';
import PaymentCards from '../PaymentCards';
import InfoSection from './InfoSection';

import { SITE_NAME, BRANDS } from '../../config';

export default function Footer() {
  return (
    <div className='app-footer w-100 flex-col-cen-cen p-12-24'>
      <Brands brands={BRANDS} />
      <Hr style={{ backgroundColor: '#fff' }} />
      <InfoSection />
      <Hr style={{ backgroundColor: '#fff' }} />
      <div className='footer-bottom mt-4 mb-4 w-100 flex-row-sb-cen '>
        <CopyRights siteName={SITE_NAME} />
        <PaymentCards />
      </div>
    </div>
  );
}
