// CategoryDisplay.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function DisplaySdiler({ items }) {
  return (
    <div className="w-full">
      {/* Mobile: Swiper */}
      <div className="block md:hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          navigation={true}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="text-center">
                <img src={item.src} alt={`slide-${index}`} className="rounded mx-auto" />
                <p className="mt-2 text-sm font-bold hover:underline text-gray-900 decoration-[2px]  hover:decoration-black hover:underline-offset-10  transition-all duration-200">
                  {item.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop: Grid */}
      <div className="hidden md:grid md:grid-cols-7 gap-4 px-4 py-2">
        {items.map((item, index) => (
          <div key={index} className="text-center">
            <img src={item.src} alt={`img-${index}`} className="rounded mx-auto" />
           <p className="mt-2 text-sm font-bold text-gray-900 hover:underline hover:decoration-black hover:decoration-[2px] hover:underline-offset-10 transition-all duration-200">
  {item.name}
</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplaySdiler;
