import React from 'react';

export default function CopyRights({ brands }) {
  return (
    <div className='site-brands p-12 mt-4 mb-4 w-100 flex-row-sb-cen'>
      {brands.map((b) => (
        <span className='brand'>{b.name}</span>
      ))}
    </div>
  );
}
