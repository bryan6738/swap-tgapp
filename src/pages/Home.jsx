import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar'
import Card2 from '../Components/Card2'
import Footer from '../Components/Footer'
import privacy_icon from '../assets/Home Infographics/PrivacyLogo.svg'
import variety_icon from '../assets/Home Infographics/VarietyLogo.svg'
import safety_icon from '../assets/Home Infographics/SafetyLogo.svg'
import support_icon from '../assets/Home Infographics/SupportLogo.svg'
import MainForm from '../Components/MainForm'
import transitionFade from '../assets/transitionfade.svg'
import CardShadow from '../assets/CardShadow.svg'
import { useTranslation } from 'react-i18next';
import axios from "axios";
import { sendMessage } from '../Components/SendMessage';

const Home = ({ props }) => {
  const { exchangeInfo, setExchangeInfo } = props;
  const { t, i18n } = useTranslation();
  window?.Telegram.WebApp?.ready();

  useEffect(() => {
    const userID = window.Telegram.WebApp.initDataUnsafe?.user?.id;
    if (userID) {
      axios
        .get(`https://teleswap-bot.replit.app/lang/${userID}`)
        .then((response) => {
          i18n.changeLanguage(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user language:", error);
        });
    }
  }, []);

  const cards = [
    {
      id: 0,
      title: t("Privacy"),
      img: privacy_icon,
      text1: t("PrivacySubTitle"),
      text2: t("PrivacyContent")
    },
    {
      id: 1,
      title: t('Wide choice'),
      img: variety_icon,
      text1: t("WidechoiceSubTitle"),
      text2: t("WidechoiceContent")
    },
    {
      id: 2,
      title: t('Safety'),
      img: safety_icon,
      text1: t('SafetySubTitile'),
      text2: t('SafetyContent')
    },
    {
      id: 3,
      title: t('Support'),
      img: support_icon,
      text1: t('SupportSubTitile'),
      text2: t('SupportContent')
    },
  ]

  return (
    <>
      <div className='min-h-screen flex flex-col relative' style={{ background: 'linear-gradient(to bottom, #E8E8E8, #C4EBF4, #7ECEE8)' }}>
        <Navbar />
        <div className='flex-grow container mx-auto px-4 py-8'>
          <div className='text-center mb-8'>
            <h1 className='text-4xl font- mb-2'>{ t("title")}</h1>
            <p className='text-xl'>{ t("annotation") }</p>
          </div>
          <div className='flex justify-center'>
            <MainForm {...{ exchangeInfo, setExchangeInfo }} />
          </div>
        </div>
        <img src={transitionFade} alt="Transition Fade" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full"/>
      </div>
      <div style={{ backgroundColor: 'white', width: '100%', padding: '2rem 0' }}>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl text-center mb-6'>{ t("Telegram's Premier") }<br /> { t("Cross Chain Exchange") } </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {cards.map((card, index) => (
              <div key={index} className="relative">
                {(card.id === 0 || card.id === 3) && (
                  <img src={CardShadow} alt="Card Shadow" style={{maxWidth: "130%"}} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400%] h-[400%]"/>
                )}
                <div className="relative z-10">
                  <Card2 {...card} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
