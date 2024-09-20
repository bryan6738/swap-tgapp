import React from 'react';
import Navbar from '../Components/Navbar';
import { useTranslation } from 'react-i18next';

// Custom CheckCircle component
const CheckCircle = ({ size = 20, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`feather feather-check-circle ${className}`}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const RoadmapItem = ({ title, description, completed }) => (
  <div className="flex items-start mb-4">
    <div className={`mr-2 mt-1 ${completed ? 'text-green-500' : 'text-blue-500'}`}>
      {completed ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full bg-blue-500" />}
    </div>
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  </div>
);

const SectionTitle = ({ title, showLine = true }) => (
  <div className="mb-4">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    {showLine && <div className="w-3/4 h-0.5 bg-blue-500"></div>}
  </div>
);

const TeleSwapRoadmap = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="text-white p-6 rounded-lg max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">TeleSwap {t("roadmap")}</h1>
        
        <div className="mb-6">
          <SectionTitle title={t("Our Journey")} showLine={false} />
          <div className="border-l-2 border-blue-500 pl-4">
            <RoadmapItem
              title={t("Fair Launch")}
              description={t("Launched the app with real-time floating rates and seamless transactions as a global crypto currency exchange.")}
              completed={true}
            />
            <RoadmapItem
              title={t("User Growth")}
              description={t("Achieve consistent active users and expand to be one of the biggest Apps on Telegram.")}
            />
            <RoadmapItem
              title={t("New Features")}
              description={t("Introduce valuable cryptocurrency services to Telegram Users.")}
            />
            <RoadmapItem
              title={t("Partnerships")}
              description={t("Form strategic partnerships with major influencers and gain market share on Telegram.")}
            />
          </div>
        </div>
        
        <div className="mb-6">
          <SectionTitle title={t("Future Goals")} />
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>{t("Create the most used Mini app for exchanges on Telegram.")}</li>
            <li>{t("Join the Open League.")}</li>
            <li>{t("Create one of the most valuable brands on Telegram.")}</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <SectionTitle title={t("TeleSwap Token Holders")} />
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold flex items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 mr-2" />
                {t("Earn By Holding")}
              </h3>
              <p className="text-sm text-gray-300">{t("Token Holders earn 50% of platform revenue. Get rewarded for holding the TeleSwap token. Rewards are automatically distributed to Token Holders when the profit threshhold is met. Must hold .1% to be elidgle for rewards.")}</p>
            </div>
            <div>
              <h3 className="font-semibold flex items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 mr-2" />
                {t("Be A Part of Something Big")}
              </h3>
              <p className="text-sm text-gray-300">{t("The TeleSwap Team is dedicated to creating incredible value and utility to the TON Ecosystem.")}</p>
            </div>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-400">
          © 2024 TeleSwap
        </div>
      </div>
    </div>);
}

export default TeleSwapRoadmap;