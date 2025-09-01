// components/StyleSwitcher.js
import React from 'react';
import { CiSettings } from "react-icons/ci";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const StyleSwitcher = ({ onToggleDarkMode, darkMode, onChangeStyle, activeStyle }) => {
  return (
    <div className="style-switcher">
      <div className="style-switcher-toggle s-icon" onClick={() => document.querySelector('.style-switcher').classList.toggle('open')}>
        <CiSettings size={30} className='changeTheme-icon-1'/>
      </div>
      <div className="day-night s-icon" onClick={onToggleDarkMode}>
         {darkMode ? <FaSun size={20} className='changeTheme-icon-2' /> : <FaMoon size={20} className='changeTheme-icon-2' />}
      </div>
      <h4>Theme Color</h4>
      <div className="colors">
        <span className="color-1" onClick={() => onChangeStyle('color-1')}></span>
        <span className="color-2" onClick={() => onChangeStyle('color-2')}></span>
        <span className="color-3" onClick={() => onChangeStyle('color-3')}></span>
        <span className="color-4" onClick={() => onChangeStyle('color-4')}></span>
        <span className="color-5" onClick={() => onChangeStyle('color-5')}></span>
      </div>
    </div>
  );
};

export default StyleSwitcher;