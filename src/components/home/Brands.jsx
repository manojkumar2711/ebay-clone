import React from 'react';

import DisplaySdiler from './DisplaySdiler';


import p1 from '../../assets/products/br1.jpg';
import p2 from '../../assets/products/br2.jpg';
import p3 from '../../assets/products/br3.jpg';
import p4 from '../../assets/products/br4.jpg';
import p5 from '../../assets/products/br5.jpg';
import p6 from '../../assets/products/br6.jpg';
import p7 from '../../assets/products/br7.jpg';

const images = [
  { src: p1, name: 'Apple' },
  { src: p2, name: 'Dyson' },
  { src: p3, name: 'Samsung' },
  { src: p4, name: 'Nintendo' },
  { src: p5, name: 'PlayStation' },
  { src: p6, name: 'Lego' },
  { src: p7, name: 'Pokémon' },
];

function Brands() {
  return (
   <>
       <div className="container mx-auto">
            <h2 className="text-3xl font-bold">Best-selling brands on eBay</h2>
            <div className="mt-10 mb-10 p-3">
              <DisplaySdiler items={images} />
            </div>
          </div>

   </>
  )
}

export default Brands
