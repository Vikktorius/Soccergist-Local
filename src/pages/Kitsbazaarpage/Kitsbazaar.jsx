import React from "react";
import "./Kitsbazaar.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";
import Header from "../../components/homepage/header/Header";
import Kitsnavbar from "../../components/kitsbazaarpage/kitsnavbar/Kitsnavbar";
import Livescoreheader from "../../components/kitsbazaarpage/livescoreheader/Livescoreheader";
import Featuredkits from "../../components/kitsbazaarpage/featuredkits/Featuredkits";
import Htext from "../../components/kitsbazaarpage/htext/Htext";
import Fullwithpic from "../../components/kitsbazaarpage/fullwithpic/Fullwithpic";
import Footer from "../../components/kitsbazaarpage/kitsfooter/Kitsfooter";

const Kitsbazaar = () => {
  return (
    <div className="kits-bazaar-page">
      <Header />
      <Kitsnavbar />
      <Livescoreheader />
      <div className="all-jersey-card">
        <Swiper
          speed={100}
          loop={true}
          touchRatio={1.5}
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 1.4,
            },

            475: {
              width: 475,
              slidesPerView: 3,
            },
            640: {
              width: 640,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 2.3,
            },
            1024: {
              width: 1024,
              slidesPerView: 2.7,
            },
            1280: {
              width: 1280,
              slidesPerView: 4,
            },
            1334: {
              width: 1512,
              slidesPerView: 4.7,
            },
          }}
        >
          <SliderButtons />
          <SwiperSlide>
            <Featuredkits
              image1="./liverpool.png"
              text2="Liverpool 20/21 Home Jersey"
              text3="#10,000"
              text4="Available Sizes"
              text5="S"
              text6="M"
              text7="L"
              text8="XL"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Featuredkits
              image1="./nga.png"
              text2="Liverpool 20/21 Home Jersey"
              text3="#10,000"
              text4="Available Sizes"
              text5="S"
              text6="M"
              text7="L"
              text8="XL"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Featuredkits
              image1="./psg.png"
              text2="Liverpool 20/21 Home Jersey"
              text3="#10,000"
              text4="Available Sizes"
              text5="S"
              text6="M"
              text7="L"
              text8="XL"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Featuredkits
              image1="./barce.png"
              text2="Liverpool 20/21 Home Jersey"
              text3="#10,000"
              text4="Available Sizes"
              text5="S"
              text6="M"
              text7="L"
              text8="XL"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Featuredkits
              image1="./liverpool.png"
              text2="Liverpool 20/21 Home Jersey"
              text3="#10,000"
              text4="Available Sizes"
              text5="S"
              text6="M"
              text7="L"
              text8="XL"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Featuredkits
              image1="./nga.png"
              text2="Liverpool 20/21 Home Jersey"
              text3="#10,000"
              text4="Available Sizes"
              text5="S"
              text6="M"
              text7="L"
              text8="XL"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Featuredkits
              image1="./psg.png"
              text2="Liverpool 20/21 Home Jersey"
              text3="#10,000"
              text4="Available Sizes"
              text5="S"
              text6="M"
              text7="L"
              text8="XL"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Featuredkits
              image1="./barce.png"
              text2="Liverpool 20/21 Home Jersey"
              text3="#10,000"
              text4="Available Sizes"
              text5="S"
              text6="M"
              text7="L"
              text8="XL"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <Htext />
      <Fullwithpic />
      <Footer />
    </div>
  );
};

export default Kitsbazaar;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div>
      <button className="left-btn" onClick={() => swiper.slidePrev()}>
        &lt;
      </button>
      <button className="right-btn" onClick={() => swiper.slideNext()}>
        &gt;
      </button>
    </div>
  );
};
