import React from 'react';
import '../css/front.css';
import Middle from './Middle';
import Top from './Top';
import Bottom from './Bottom';

export default function Front() {
  return <div className='container'>
      <div> <Top /></div>
      <div> <Middle /></div>
      <div> <Bottom /></div>
  </div>;
}
