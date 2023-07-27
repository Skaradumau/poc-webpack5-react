import React from 'react';
import SVG  from './SVG_Logo.png';

const Hello = () => {

  return (
    <div>
      <h1>Hello from React!</h1>
      <img src={SVG} style={{ width: '100px', height: '100px' }} />
    </div>
  )
};

export default Hello;
