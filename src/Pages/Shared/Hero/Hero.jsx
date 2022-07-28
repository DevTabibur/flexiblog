import React from 'react';
import './Hero.css';
import Slider1 from '../../../assets/img/slide-tech-1.jpg';
import Slider2 from '../../../assets/img/slide-tech-thumb-1.jpg';
import Slider3 from '../../../assets/img/slide-tech-thumb-2.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

const Hero = () => {
  return (
    <div className='mb-12 mt-0'>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative overflow-hidden ">
          <img src={Slider1} alt="Slider1" />
          {/* <div className="swiper-inner-info absolute w-96 pl-12 py-12 left-0 text-left bottom-5">
            <h1 className="text-5xl my-2 font-bold">Specialist in the grocery store</h1>
            <p className="my-4">Only this week. Don't miss...</p>
            <p className="my-5">
              from <span className="text-red-700 text-4xl">$79.30</span>
            </p>
            <button>Shop Now</button>
          </div> */}
        </SwiperSlide>

        <SwiperSlide className="relative overflow-hidden ">
          <img src={Slider2} alt="Slider2" />
          {/* <div className="swiper-inner-info absolute w-96 pl-12 py-12 left-0 text-left bottom-5">
            <h1 className="text-5xl my-2 font-bold">Specialist in the grocery store</h1>
            <p className="my-4">Only this week. Don't miss...</p>
            <p className="my-5">
              from <span className="text-red-700 text-4xl">$79.30</span>
            </p>
            <button>Shop Now</button>
          </div> */}
        </SwiperSlide>

        <SwiperSlide className="relative overflow-hidden ">
          <img src={Slider3} alt="Slider3" />
          {/* <div className="swiper-inner-info absolute w-96 pl-12 py-12 left-0 text-left bottom-5">
            <h1 className="text-5xl my-2 font-bold">Specialist in the grocery store</h1>
            <p className="my-4">Only this week. Don't miss...</p>
            <p className="my-5">
              from <span className="text-red-700 text-4xl">$79.30</span>
            </p>
            <button>Shop Now</button>
          </div> */}
        </SwiperSlide>

      </Swiper>
      </div>
  )
}

export default Hero;