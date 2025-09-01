import React, { useState } from 'react';
import Aside from './components/Aside';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import StyleSwitcher from './components/StyleSwitcher';
import useTheme from './hooks/useTheme';

import './App.css';
import './style-switcher.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [asideOpen, setAsideOpen] = useState(false);

  // custom hook manages dark mode + active style
  const { darkMode, toggleDarkMode, activeStyle, changeStyle } = useTheme();

  const handleNavClick = (section) => {
    setActiveSection(section);
    if (window.innerWidth < 1200) {
      setAsideOpen(false);
    }
  };

  return (
    <div className="App">
      <Aside 
        activeSection={activeSection} 
        onNavClick={handleNavClick}
        asideOpen={asideOpen}
        onToggleAside={() => setAsideOpen(!asideOpen)}
      />
      
      <div className={`main-content ${asideOpen ? 'open' : ''}`}>
        {activeSection === 'home' && <Home />}
        {activeSection === 'about' && <About />}
        {activeSection === 'service' && <Services />}
        {activeSection === 'portfolio' && <Portfolio />}
        {activeSection === 'contact' && <Contact />}
      </div>
      
      <StyleSwitcher 
        onToggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        onChangeStyle={changeStyle}
        activeStyle={activeStyle}
      />
    </div>
  );
}

export default App;
