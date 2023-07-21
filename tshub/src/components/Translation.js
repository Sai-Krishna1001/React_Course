import React, { useContext, useState } from 'react';

const LanguageContext = React.createContext();

const Translation = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
  };

  return (
    <LanguageContext.Provider value={language}>
      <ChildComponent handleLanguageChange = {handleLanguageChange} />
    </LanguageContext.Provider>
  );
}

const ChildComponent = ({handleLanguageChange}) => {
  const language = useContext(LanguageContext);

  const translations = {
    en: {
      greeting: 'Hello',
      content: 'Welcome to our application!',
    },
    te: {
      greeting: 'హలో',
      content: 'మా యాప్‌కు స్వాగతం!',
    },
    ta: {
      greeting: 'வணக்கம்',
      content: 'எங்கள் பயன்பாட்டிற்கு வருக!',
    },
    hi: {
      greeting: 'नमस्ते',
      content: 'हमारे ऐप में आपका स्वागत है!',
    },
  };


  const { greeting, content } = translations[language];

  return (
    <div>
      <h1>{greeting}, User!</h1>
      <p>{content}</p>
      <select onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="te">Telugu</option>
        <option value="ta">Tamil</option>
        <option value="hi">Hindi</option>
      </select>
    </div>
  );
}
export default Translation
