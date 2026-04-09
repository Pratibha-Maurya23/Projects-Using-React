import React from 'react';
import heroImage from '../assets/header-img.avif';

const CalendarHeader = ({ currentDate, onPrevMonth, onNextMonth }) => {
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden bg-panel-bg bg-[#188ec8] rounded-[20px]">
      {/* Dynamic Background Image */}
      <img 
        src={heroImage} 
        alt="Calendar Hero" 
        className="w-full h-full object-cover absolute top-0 left-0 z-[2] rounded-[20px] [clip-path:polygon(0%_0%,100%_0%,100%_80%,50%_100%,0%_80%)] opacity-90" 
      />
      
      {/* Month/Year Typography Overlaid */}
      <div className="absolute bottom-[50px] md:bottom-[70px] right-[20px] md:right-[40px] text-right z-[5] text-white pointer-events-none">
        <div className="text-[1.2rem] md:text-[1.6rem] font-[400] tracking-[2px] leading-none mb-1">{year}</div>
        <div className="text-[1.6rem] md:text-[2.2rem] font-[800] uppercase tracking-[1px] leading-none">{monthName}</div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="absolute top-[30px] right-[30px] z-10 flex gap-[15px]">
        <button className="bg-gray-700/20 backdrop-blur-[5px] border border-white/40 text-white w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-gray-500/40 hover:scale-105" onClick={onPrevMonth} aria-label="Previous Month">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className="bg-gray-700/20 backdrop-blur-[5px] border border-white/40 text-white w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-gray-500/40 hover:scale-105" onClick={onNextMonth} aria-label="Next Month">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
