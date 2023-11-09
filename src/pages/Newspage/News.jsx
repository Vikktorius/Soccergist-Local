import React from "react";
import "./News.css";
import Header from "../../components/homepage/header/Header";
import Newsread from "../../components/newspage/newsread/Newsread";
import Toptagscard from "../../components/newspage/toptagscard/Toptagscard";
import Socialcard from "../../components/newspage/socialcard/Socialcard";
import Chatbox from "../../components/newspage/chatbox/Chatbox";
import Fullcomment from "../../components/newspage/fullcomment/Fullcomment";
import Featurednews from "../../components/newspage/featurednews/Featurednews";
import Footer from "../../components/newspage/footer/Footer";

const News = () => {
  return (
    <div className="news-page">
      <Header />
      <Newsread
        Headtext1="Tottenham striker's pursuit by Bayern Munich must be thwarted by Man Utd"
        image1="./icontime.svg"
        text1="20 minutes"
        image2="iconcomment.svg"
        text2="16"
        image3="./Ellipseblack.png"
        image4="./link.png"
        image5="./Ellipseblack.png"
        image6="./twitterblack.png"
        image7="./Ellipseblack.png"
        image8="./facebookblack.png"
        image9="./Ellipseblack.png"
        image10="./instagramblack.png"
        image11="./Ellipseblack.png"
        image12="./whatsappblack.png"
        image13="./Harry3.png"
        Headtext2="Spurs chairman Daniel Levy has reportedly been instructed to issue the forward with a contract ultimatum, which could open the door for the Red Devils"
        Paragraph1="It is understood Kane believes - out of respect for Tottenham and also the new manager Ange Postecoglou - it would be unfair for him to leave once the season has started.



Other sources, however, have indicated that a potential move to Bayern Munich may still be on the agenda right up until the Transfer Deadline on September 1.
Sky in Germany are reporting the total package Bayern are currently offering for the England captain has yet to increase but the club plan to improve on the existing figure of £81.7m (€95m), which would already represent the largest transfer in the club's history."
        image14="./Harry2.png"
        Paragraph2="It is understood Kane believes - out of respect for Tottenham and also the new manager Ange Postecoglou - it would be unfair for him to leave once the season has started.

Other sources, however, have indicated that a potential move to Bayern Munich may still be on the agenda right up until the Transfer Deadline on September 1.
Sky in Germany are reporting the total package Bayern are currently offering for the England captain has yet to increase but the club plan to improve on the existing figure of £81.7m (€95m), which would already represent the largest transfer in the club's history.

It is understood Kane believes - out of respect for Tottenham and also the new manager Ange Postecoglou - it would be unfair for him to leave once the season has started. Other sources, however, have indicated that a potential move to Bayern Munich may still be on the agenda right up until the Transfer Deadline on September 1."
      />
      <Toptagscard
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
      <Socialcard />
      <Chatbox />
      <Fullcomment />
      <Featurednews />

      <Footer />
    </div>
  );
};

export default News;
