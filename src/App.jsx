import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from "./components/Navbar/NavBar";
import { Banner } from "./components/Banner/Banner";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { WhatsAppContact } from "./components/Contact/WhatsAppContact";
import { Footer } from "./components/Footer/Footer";
import Curriculum from './components/Curriculum/Curriculum'; // importá tu componente de CV

function App() {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'es');
  const location = useLocation();
  const isCV = location.pathname === '/cv';

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };

  return (
    <div className="App">
       {!isCV && (
        <NavBar language={language} handleLanguageChange={handleLanguageChange} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner language={language} />
              <Skills language={language} />
              <Projects language={language} />
              <Contact language={language} />
              <Footer language={language} />
              <WhatsAppContact />
            </>
          }
        />
        <Route path="/cv" element={<Curriculum />} />
      </Routes>
    </div>
  );
}

export default App;
