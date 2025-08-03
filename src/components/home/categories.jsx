import React from 'react';

import DisplaySdiler from './DisplaySdiler';


import p1 from '../../assets/products/p1.jpg';
import p2 from '../../assets/products/p2.jpg';
import p3 from '../../assets/products/p3.jpg';
import p4 from '../../assets/products/p4.jpg';
import p5 from '../../assets/products/p5.jpg';
import p6 from '../../assets/products/p6.jpg';
import p7 from '../../assets/products/p7.jpg';

const images = [
  
  { src: p1, name: 'New Electronics' },
  { src: p2, name: 'Collectibles' },
  { src: p3, name: 'Parts & Accessories' },
  { src: p4, name: 'Fashion' },
  { src: p5, name: 'Health & Beauty' },
  { src: p6, name: 'Home & Garden' },
  { src: p7, name: ' Refurbished' },
 
];

function Categories() {
  return (
    <>
   


       <div className="container mx-auto">
            <h2 className="text-3xl font-bold">Browse by categories</h2>
            <div className="mt-10 mb-10 p-3">
              <DisplaySdiler items={images} />
            </div>
          </div>

     
    </>
  );
}

export default Categories;
