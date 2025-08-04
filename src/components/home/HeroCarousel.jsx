import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";


import Bv from "../../assets/img-logo/bg-1.png";
import Bg1 from "../../assets/img-logo/bg-2.png";
import Bv1 from "../../assets/img-logo/bv1.png";
import Bv2 from "../../assets/img-logo/bv2.png";
import Bv6 from "../../assets/img-logo/bv6.png";
import  Bv3 from "../../assets/products/pdd.png"

export default function HeroCarousel() {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (isPlaying) swiperRef.current.autoplay.stop();
    else swiperRef.current.autoplay.start();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full max-w-8xl mx-auto">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        loop
      >
        <SwiperSlide>
          {/* Slide 1 with custom layout */}
          <div  className="h-96 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${Bv})` }} >
            <div className="w-4/5 mx-auto h-full flex items-center justify-Start">
              <div className="flex flex-col text-left space-y-4">
                <h5 className="text-4xl font-bold text-white">Get . help exactly when you need it</h5>
                <p className="text-lg text-gray-600 max-w-md text-white">
                  From shipping to returns, find answers to all of your questions.
                </p>
                <button className="btn bg-gray-50 text-black rounded-full border-none  hover:text-white w-fit">
                 Start here
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* Slide 2 with different layout */}
          <div className="h-96 bg-black flex flex-col justify-center items-center p-8">
            <div className="max-w-7xl mx-auto px-4 h-screen flex items-center">
              <div className="w-1/2 flex flex-col justify-start items-start text-start space-y-6">
                <h1 className="text-4xl text-white font-bold">Endless accessories. <br/> Epic prices.</h1>
                <p className="text-lg text-white max-w-md">
                 Browse millions of upgrades for your ride.
                </p>
                <button className="btn btn-outline bg-gray-50 text-black rounded-full outline:none border-none hover:bg-blue-700">
                  Shop Now
                </button>
              </div>

              {/* Right Column */}
              <div className="w-1/2 flex flex-row space-y-8 gap-10">
                <div className="">
                  <img
                    src={ Bv3 }
                    className="w-full object-cover rounded block"
                  />
                  <p className="block">Do your thing </p>
                </div>
               
              </div>
            </div>
          </div>

        </SwiperSlide>
         <SwiperSlide>
          {/* Slide 1 with custom layout */}
          <div  className="h-96 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg1})` }} >
            <div className="w-4/5 mx-auto h-full flex items-center justify-Start">
              <div className="flex flex-col text-left space-y-4">
                <h5 className="text-4xl font-bold text-white">All your faves are here</h5>
                <p className="text-lg text-gray-600 max-w-md text-white">
                  Refresh your space, elevate your style and power your work.
                </p>
                <button className="btn bg-gray-50 text-black rounded-full border-none  hover:text-white w-fit">
                  Do your thing
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      <SwiperSlide>
          {/* Slide 2 with different layout */}
           <div className="h-96 bg-[#0099f0]  flex flex-col justify-center items-center p-8">
            <div className="max-w-7xl mx-auto px-4 h-screen flex items-center">
              <div className="w-1/2 flex flex-col justify-start text-white items-start text-start space-y-6">
                <h1 className="text-4xl  font-bold">All your faves are here</h1>
                <p className="text-lg  max-w-md">
                  Refresh your space, elevate your style and power your work.
                </p>
                <button className="btn btn-outline bg-gray-50 text-black rounded-full outline:none border-none ">
                  Do your thing
                </button>
              </div>

              {/* Right Column */}
              <div className="w-1/2 flex flex-row space-y-8 text-white gap-10">
                <div className="">
                  <img
                    src={Bv1}
                    className="w-full h-48 object-cover rounded block"
                  />
                  <p className="block text-xl font-[600]">Fashion ❯ </p>
                </div>
                <div className="">
                  <img src={Bv2} className="w-full h-48 object-cover rounded" />
                  <p className="block text-xl font-[600]">Home Garden ❯ </p>
                </div>
                <div className="">
                  <img src={Bv6} className="w-full h-48 object-cover rounded" />
                  <p className="block text-xl font-[600]">Electronics ❯ </p>
                </div>
              </div>
            </div>
          </div>
         
        </SwiperSlide>

        {/* Custom Controls */}

        <div className="custom-pagination absolute bottom-10 left-1/2 transform -translate-x-1/2 flex z-40  space-x-3 "></div>

        <div className="absolute bottom-10 right-8 flex space-x-4 z-40 items-center">
          <button className="custom-prev btn btn-circle btn-sm bg-gray-50 text-black ">
            ❮
          </button>
          {/* hover:bg-gray-700 */}
          <button className="custom-next btn btn-circle btn-sm bg-gray-50 text-black ">
            ❯
          </button>
          <button
            onClick={togglePlay}
            className="btn btn-sm bg-gray-50 text-black "
            aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>
        </div>
      </Swiper>
    </div>
  );
}
