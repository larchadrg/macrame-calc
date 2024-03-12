import Nav from './Nav';
import WelcomeSection from './WelcomeSection';
import CordCalculatorSection from './CordCalculatorSection.js';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer	from './Footer';

function App() {
  const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
        localStorage.setItem('i18nextLng', lng);
    };

    useEffect(() => {
      const lng = localStorage.getItem('i18nextLng');
      if (lng) {
          i18n.changeLanguage(lng);
      }
      }, [language, i18n]);
  
  return (
    <div className="App">
    <Nav changeLanguage={changeLanguage}/>
    <div className="container">
      <WelcomeSection/>
      <hr></hr>
      <CordCalculatorSection/>
    </div>
    <Footer/>  
    </div>
  );
}

export default App;
