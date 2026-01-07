import { useEffect, useState } from 'react';

const COLOR_MAP = {
  'color-1': '#ec1839',
  'color-2': '#fa5b0f',
  'color-3': '#37b182',
  'color-4': '#1854b4',
  'color-5': '#f021b2'
};

export default function useTheme() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeStyle, setActiveStyle] = useState('color-2');

  // Dark mode sync
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Active style sync
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--skin-color',
      COLOR_MAP[activeStyle] || COLOR_MAP['color-2']
    );
  }, [activeStyle]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const changeStyle = (color) => setActiveStyle(color);

  return { darkMode, toggleDarkMode, activeStyle, changeStyle };
}
