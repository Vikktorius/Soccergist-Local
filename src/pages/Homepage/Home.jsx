import React from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";

import Header from "../../components/homepage/header/Header";
import Frame from "../../components/homepage/frame/Frame";
import Kane from "../../components/homepage/kane/Kane";
import Side from "../../components/homepage/side/Side";
import Middle from "../../components/homepage/middle/Middle";
import Videoz from "../../components/homepage/videoz/Videoz";
import AdditionalV from "../../components/homepage/additionalV/AdditionalV";
import Slider from "../../components/homepage/slider/Slider";
import Yellow from "../../components/homepage/yellow/Yellow";
import Culture from "../../components/homepage/culture/Culture";
import Footer from "../../components/homepage/footer/Footer";

const Homepage = () => {
  return (
    <div className="home-full-page">
      <Header />
      <Frame />
      <Kane
        image1="./Harry.png"
        button1="Transfer"
        button2="Latest"
        Header="Tottenham striker's pursuit by Bayern Munich must be thwarted by Man Utd"
        paragraph="Spurs chairman Daniel Levy has reportedly been instructed to issue the forward with a contract ultimatum, which could open the door for the Red Devils"
        image4="./icontime.svg"
        text1="20 minutes ago"
        image5="./iconcomment.svg"
        text2="16"
      />
      <div className="all-cards">
        <Side
          word="Quick Links"
          img="./Line2.png"
          word1="Our Twitter Spaces (Sundays)"
          image="./twitter.svg"
          word2="League Competitions"
          word3="European Competitions"
          word4="Fixtures and Results"
          word5="Football Culture"
          word6="Kits Bazaar"
          word7="Cart and Pre - 0rder"
          word8="Polls"
          word9="Quizzes"
        />

        <Side
          word="Top Tags"
          img="./Line2.png"
          word1="Transfers"
          word2="Breaking News"
          word3="Stories"
          word4="Latest News"
          word5="Opinion and Analysis"
          word6="Top Videos"
          word7="Player Lifestyles"
          word8="Rumours"
          word9="FPL Updates"
        />

        <Side
          word="Trending"
          img="./Line2.png"
          word1="Elanga joins Nottingham Forest from Utd"
          word2="Mbappe to Saudi will change everything"
          word3="Kylian Mbappe told he has 'every right' to run down PSG contract"
          word4="Liverpool drop defensive disasterclass"
          word5="The Dramatic Fall of senegalese Sadio Mane"
          word6="Liverpool captain says goodbyes ahead of Al Ettifaq move under Steven Gerrard"
          word7="Erik ten Hag: Man Utd have made progress in striker pursuit."
        />
        <div className="special-card">
          <h3 className="txt1">Connect with us</h3>
          <img className="img1" src="./Line2.png" />

          <p className="special-text1">
            <img src="./facebook.svg" />
            <p>Facebook</p>
          </p>
          <p className="special-text1">
            <img src="./instagram.svg" />
            <p>Instagram</p>
          </p>
          <p className="special-text1">
            <img src="./twitter.svg" />
            <p>Twitter</p>
          </p>
          <p className="special-text1">
            <img src="./Vector.svg" />
            <p>Whatsapp</p>
          </p>
          <p className="special-text1">
            <img src="gmail.svg" />
            <p>Soccergistonline@gmail</p>
          </p>
          <p className="special-text1">
            <img src="youtube.svg" />
            <p>Youtube</p>
          </p>
        </div>
      </div>
      <div className="middle-card">
        <div className="card1">
          <Middle
            image1="./Ronaldo.png"
            button1="Transfer"
            button2="Latest"
            Header="Tottenham striker's pursuit by Bayern Munich must be thwarted by Man Utd"
            image4="./icontime.svg"
            text1="20 minutes ago"
            image5="./iconcomment.svg"
            text2="16"
          />
        </div>
        <div className="card2">
          <Middle
            image1="./Jackson.png"
            button1="Transfer"
            button2="Latest"
            Header="Tottenham striker's pursuit by Bayern Munich must be thwarted by Man Utd"
            image4="./icontime.svg"
            text1="20 minutes ago"
            image5="./iconcomment.svg"
            text2="16"
          />
        </div>
        <div className="card3">
          <Middle
            image1="./Mbappe.png"
            button1="Transfer"
            button2="Latest"
            Header="Tottenham striker's pursuit by Bayern Munich must be thwarted by Man Utd"
            image4="./icontime.svg"
            text1="20 minutes ago"
            image5="./iconcomment.svg"
            text2="16"
          />
        </div>
        <div className="card4">
          <Middle
            image1="./Arteta.png"
            button1="Transfer"
            button2="Latest"
            Header="Tottenham striker's pursuit by Bayern Munich must be thwarted by Man Utd"
            image4="./icontime.svg"
            text1="20 minutes ago"
            image5="./iconcomment.svg"
            text2="16"
          />
        </div>
      </div>
      <Videoz
        Head="Top Videos"
        img1="./Messi.png"
        img2="./iconplay.png"
        img3="./Messibtn.png"
        bttn1="Latest News"
        bttn2="Top Videos"
        Heading="Lionel Messi magic lights up Inter Miami"
        para="The seven-time Ballon d'Or winner made the perfect start to life in the United States with a stunning stoppage-time strike."
        img4="./icontime.svg"
        txt1="56 minutes ago"
        img5="./iconcomment.svg"
        txt2="322"
      />

      <div className="Addtion-card">
        <AdditionalV
          Head="Top Videos"
          img1="./caicedo.png"
          img2="./iconplay.png"
          img3="./Messibtn.png"
          bttn1="Latest News"
          bttn2="Top Videos"
          Heading="Tottenham striker's pursuit by Bayern Munich must be thwarted by Man Utd"
          img4="./icontime.svg"
          txt1="56 minutes ago"
          img5="./iconcomment.svg"
          txt2="322"
        />
      </div>

      <div className="Additional2">
        <AdditionalV
          Head="Top Videos"
          img1="./mane.png"
          img2="./iconplay.png"
          img3="./Messibtn.png"
          bttn1="Latest News"
          bttn2="Top Videos"
          Heading="Tottenham striker's pursuit by Bayern Munich must be thwarted by Man Utd"
          img4="./icontime.svg"
          txt1="56 minutes ago"
          img5="./iconcomment.svg"
          txt2="322"
        />
      </div>
      <div className="all-tranfer-cards">
        <Swiper
          className="swiper-container"
          // slidesPerView={2}
          speed={100}
          loop={true}
          touchRatio={1.5}
          spaceBetween={50}
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
              slidesPerView: 3.2,
            },
            1334: {
              width: 1512,
              slidesPerView: 4,
            },
          }}
        >
          <SliderButtons />
          <SwiperSlide>
            <Slider
              image1="./gvardiol.png"
              button1="Transfer"
              button2="Latest"
              Header="Tottenham striker's pursuit by Bayern Munich must be thwarted by Man Utd"
              image4="./icontime.svg"
              text1="20 minutes ago"
              image5="./iconcomment.svg"
              text2="16"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider
              image1="./Arteta.png"
              button1="Transfer"
              button2="Latest"
              Header="Tottenham striker's pursuit by Bayern Munich must be thwarted by Man Utd"
              image4="./icontime.svg"
              text1="20 minutes ago"
              image5="./iconcomment.svg"
              text2="16"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider
              image1="./Klopp.png"
              button1="Transfer"
              button2="Latest"
              Header="Tottenham striker's pursuit by Bayern Munich must be thwarted by Man Utd"
              image4="./icontime.svg"
              text1="20 minutes ago"
              image5="./iconcomment.svg"
              text2="16"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider
              image1="./curtis.png"
              button1="Transfer"
              button2="Latest"
              Header="Tottenham striker's pursuit by Bayern Munich must be thwarted by Man Utd"
              image4="./icontime.svg"
              text1="20 minutes ago"
              image5="./iconcomment.svg"
              text2="16"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider
              image1="./Ronaldo.png"
              button1="Transfer"
              button2="Latest"
              Header="Tottenham striker's pursuit by Bayern Munich must be thwarted by Man Utd"
              image4="./icontime.svg"
              text1="20 minutes ago"
              image5="./iconcomment.svg"
              text2="16"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider
              image1="./caicedo.png"
              button1="Transfer"
              button2="Latest"
              Header="Tottenham striker's pursuit by Bayern Munich must be thwarted by Man Utd"
              image4="./icontime.svg"
              text1="20 minutes ago"
              image5="./iconcomment.svg"
              text2="16"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Slider
              image1="./curtis.png"
              button1="Transfer"
              button2="Latest"
              Header="Tottenham striker's pursuit by Bayern Munich must be thwarted by Man Utd"
              image4="./icontime.svg"
              text1="20 minutes ago"
              image5="./iconcomment.svg"
              text2="16"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Slider
              image1="./Klopp.png"
              button1="Transfer"
              button2="Latest"
              Header="Tottenham striker's pursuit by Bayern Munich must be thwarted by Man Utd"
              image4="./icontime.svg"
              text1="20 minutes ago"
              image5="./iconcomment.svg"
              text2="16"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Slider
              image1="./Ronaldo.png"
              button1="Transfer"
              button2="Latest"
              Header="Tottenham striker's pursuit by Bayern Munich must be thwarted by Man Utd"
              image4="./icontime.svg"
              text1="20 minutes ago"
              image5="./iconcomment.svg"
              text2="16"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Slider
              image1="./caicedo.png"
              button1="Transfer"
              button2="Latest"
              Header="Tottenham striker's pursuit by Bayern Munich must be thwarted by Man Utd"
              image4="./icontime.svg"
              text1="20 minutes ago"
              image5="./iconcomment.svg"
              text2="16"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Slider
              image1="./jackson.png"
              button1="Transfer"
              button2="Latest"
              Header="Tottenham striker's pursuit by Bayern Munich must be thwarted by Man Utd"
              image4="./icontime.svg"
              text1="20 minutes ago"
              image5="./iconcomment.svg"
              text2="16"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <Yellow />
      <div className="All-culture-cards">
        <Culture
          Header1="Football Culture"
          image1="./naija.png"
          button1="Latest News"
          button2="Culture"
          Header="Nigeria Super Eagles New Kits for African Cup of Nations Qualifiers."
          paragraph="The seven-time Ballon d'Or winner made the perfect start to life in the United States with a stunning stoppage-time strike."
          image4="./icontime.svg"
          text1="20 minutes ago"
          image5="./iconcomment.svg"
          text2="16"
        />
        <Culture
          image1="./barca.png"
          button1="Latest News"
          button2="Culture"
          Header="FC Barcelona is presenting a unique kit for the 2023/24 season"
          paragraph="The seven-time Ballon d'Or winner made the perfect start to life in the United States with a stunning stoppage-time strike."
          image4="./icontime.svg"
          text1="20 minutes ago"
          image5="./iconcomment.svg"
          text2="16"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;

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
