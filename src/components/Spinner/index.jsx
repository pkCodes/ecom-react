import React from 'react';

export default function Spinner({ show }) {
  const cls = ['spinner-backdrop', 'wh-100vw', 'flex-col-cen-cen'];

  if (show) cls.push('show');

  return (
    <div className={cls.join(' ')}>
      <div className='spinner wh-36 br-0.5' />
    </div>
  );
}
