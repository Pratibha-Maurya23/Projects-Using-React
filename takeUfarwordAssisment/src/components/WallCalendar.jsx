import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import NotesSection from './NotesSection';
import CalendarGrid from './CalendarGrid';

const WallCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectionStart, setSelectionStart] = useState(null);
  const [selectionEnd, setSelectionEnd] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = (date) => {
    if (!selectionStart || (selectionStart && selectionEnd)) {
      setSelectionStart(date);
      setSelectionEnd(null);
      return;
    }
    
    if (selectionStart && !selectionEnd) {
      if (date.getTime() === selectionStart.getTime()) {
        setSelectionStart(null);
      } else {
        setSelectionEnd(date);
      }
    }
  };

  const handleDateHover = (date) => {
    if (selectionStart && !selectionEnd) {
      setHoverDate(date);
    } else if (hoverDate !== null) {
      setHoverDate(null);
    }
  };

  const monthId = `${currentDate.getFullYear()}_${currentDate.getMonth()}`;

  return (
    <div className="w-full max-w-5xl mx-auto flex justify-center items-start">
      <div className="bg-panel-bg w-full shadow-[0_15px_35px_rgba(0,0,0,0.15)] relative overflow-visible flex flex-col">
        {/* Decorative Wire Binding */}
        <div className="absolute -top-[15px] w-full h-[30px] flex justify-center z-20 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="w-[12px] h-[30px] rounded-[10px] mx-[8px] shadow-[2px_2px_4px_rgba(0,0,0,0.3)] relative" style={{ background: 'linear-gradient(to right, #666 0%, #aaa 30%, #444 70%, #222 100%)' }}></div>
          ))}
          <div className="absolute -top-[20px] left-1/2 -translate-x-1/2 w-[50px] h-[25px] border-x-[3px] border-t-[3px] border-[#555] rounded-t-[20px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"></div>
        </div>

        <CalendarHeader 
          currentDate={currentDate}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
        />
        
        <div className="flex flex-col md:flex-row p-6 md:p-8 pb-16 gap-12 bg-panel-bg">
          <NotesSection monthId={monthId} />
          
          <CalendarGrid 
            currentDate={currentDate}
            selectionStart={selectionStart}
            selectionEnd={selectionEnd}
            hoverDate={hoverDate}
            onDateClick={handleDateClick}
            onDateHover={handleDateHover}
          />
        </div>
      </div>
    </div>
  );
};

export default WallCalendar;