import FirstPageLanding from "../components/FirstPageLanding";
import WhatWeOffer from "../components/WhatWeOffer";
import ChatbotLanding from "../components/ChatbotLanding";
import ArticlesLanding from "../components/ArticlesLanding";
import Newsletter from "../components/Newsletter";
import BackgroundMusic from "../components/BackgroundMusic";
import WellbyChatbot from "../components/WellbyChatbot";

export const Landing = () => {
  return (
    <div className="landing-page">
      <FirstPageLanding />
      <WhatWeOffer />
      <ChatbotLanding />
      <ArticlesLanding />
      <Newsletter />
      <BackgroundMusic />
      <WellbyChatbot />
    </div>
  );
};
