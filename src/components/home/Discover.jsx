import React from 'react';
import DisplaySdiler from './DisplaySdiler';

import p1 from '../../assets/products/ps1.jpg';
import p2 from '../../assets/products/ps2.jpg';
import p3 from '../../assets/products/ps3.jpg';
import p4 from '../../assets/products/ps4.jpg';
import p5 from '../../assets/products/ps5.jpg';
import p6 from '../../assets/products/ps6.jpg';
import p7 from '../../assets/products/ps7.jpg';

const images = [
  { src: p1, name: 'Sports Memorabilia' },
  { src: p2, name: 'Sports Trading Cards' },
  { src: p3, name: 'Collectible Card Games' },
  { src: p4, name: 'Funko' },
  { src: p5, name: 'Comics' },
  { src: p6, name: 'Action Figures' },
  { src: p7, name: 'Antiques' },
];

function Discover() {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold">Discover rare finds</h2>
      <div className="mt-10 mb-10 p-3">
        <DisplaySdiler items={images} />
      </div>
    </div>
  );
}

export default Discover;
