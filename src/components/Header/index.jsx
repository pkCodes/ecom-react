import React from 'react';

import { SITE_NAME } from '../../config';

export default function Header() {
  return (
    <div className='app-header w-100 h-60 pl-12 pr-12 flex-row-nul-cen'>
      <div className='logo-container h-45 w-180'>🛍 {SITE_NAME}</div>
      <nav className='app-navigation'>
        <ul className='app-navbar h-45 flex-row-fe-cen'>
          <li className='navbar-item'>Home</li>
          <li className='navbar-item'>Category</li>
          <li className='navbar-item'>Sale</li>
          <li className='navbar-item'>
            <input type='text' className='search-box br-8 w-200p p-4 ol-n_b-n ' placeholder='Search product' />
          </li>
          <li className='navbar-item'>My Account</li>
          <li className='navbar-item'>Cart</li>
        </ul>
      </nav>
    </div>
  );
}
