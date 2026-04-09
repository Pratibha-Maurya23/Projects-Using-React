import React from 'react';

// Get calendar days array
const getCalendarDays = (year, month) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  
  // Adjust so Monday is 0 and Sunday is 6 (matching MON-SUN headers)
  let startingDayIndex = firstDayOfMonth.getDay() - 1;
  if (startingDayIndex === -1) startingDayIndex = 6; // Sunday
  
  const daysInMonth = lastDayOfMonth.getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  
  const days = [];
  
  // Previous month leading days
  for (let i = 0; i < startingDayIndex; i++) {
    const day = daysInPrevMonth - startingDayIndex + i + 1;
    days.push({
      date: new Date(year, month - 1, day),
      dayNumber: day,
      isCurrentMonth: false,
    });
  }
  
  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      date: new Date(year, month, i),
      dayNumber: i,
      isCurrentMonth: true,
    });
  }
  
  // Next month trailing days to complete 6 rows (42 days)
  const totalCells = 42;
  const currentLength = days.length;
  for (let i = 1; i <= totalCells - currentLength; i++) {
    days.push({
      date: new Date(year, month + 1, i),
      dayNumber: i,
      isCurrentMonth: false,
    });
  }
  
  return days;
};

const WEEKDAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const isSameDay = (date1, date2) => {
  if (!date1 || !date2) return false;
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

const CalendarGrid = ({
  currentDate,
  selectionStart,
  selectionEnd,
  hoverDate,
  onDateClick,
  onDateHover
}) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date();
  
  const calendarDays = getCalendarDays(year, month);
  
  const getDayClasses = (dayObj) => {
    const { date, isCurrentMonth } = dayObj;
    // Base classes
    const classes = ['flex justify-center items-center text-[1rem] md:text-[1.1rem] font-semibold cursor-pointer relative transition-all duration-100 z-10 hover-circle-effect'];
    
    if (isCurrentMonth) classes.push('text-text-main');
    else classes.push('text-text-disabled');
    
    const jsDay = date.getDay();
    if (jsDay === 0 || jsDay === 6) {
      if (isCurrentMonth) classes.push('text-primary-blue');
    }
    
    let isStart = isSameDay(date, selectionStart);
    let isEnd = isSameDay(date, selectionEnd);
    let inRange = false;
    let isTodayFlag = isSameDay(date, today);
    
    let rangeStart = selectionStart;
    let rangeEnd = selectionEnd || hoverDate;

    if (rangeStart && rangeEnd) {
       const rStart = rangeStart < rangeEnd ? rangeStart : rangeEnd;
       const rEnd = rangeStart < rangeEnd ? rangeEnd : rangeStart;
       if (date > rStart && date < rEnd) inRange = true;
       if (!selectionEnd && hoverDate) {
         if (isSameDay(date, rStart)) isStart = true;
         if (isSameDay(date, rEnd)) isEnd = true;
       }
    }
    
    if (isTodayFlag) {
      if (isStart || isEnd) classes.push('is-today-dot-white');
      else classes.push('is-today-dot');
    }

    // if (isStart && isEnd) {
    //   classes.push('bg-primary-blue !text-white rounded-full no-hover-circle');
    // } 
    if (isStart) {
      // Start of range (continuous bg to right, blue circle)
      //classes.push('bg-gradient-to-r from-transparent from-50% to-primary-blue/15 to-50% !text-white no-hover-circle');
      classes.push("after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-10 after:h-10 after:bg-primary-blue after:rounded-full after:-z-10");
    } 
    // else if (isEnd) {
    //   // End of range (continuous bg to left, blue circle)
    //   classes.push('bg-gradient-to-r from-primary-blue/15 from-50% to-transparent to-50% !text-white no-hover-circle');
    //   classes.push("after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-10 after:h-10 after:bg-primary-blue after:rounded-full after:-z-10");
    // } else if (inRange) {
    //   classes.push('bg-primary-blue/15 !text-text-main rounded-none');
    // }
    
    return classes.join(' ');
  };

  return (
    <div className="flex-1 flex flex-col order-1 md:order-2">
      <div className="grid grid-cols-7 text-center mb-[15px]">
        {WEEKDAYS.map((day, idx) => (
          <div key={day} className={`text-[0.8rem] font-bold uppercase ${idx >= 5 ? 'text-primary-blue' : 'text-text-main'}`}>
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 auto-rows-[40px] md:auto-rows-[50px] gap-y-1" onMouseLeave={() => onDateHover(null)}>
        {calendarDays.map((dayObj, index) => {
          let edgeFix = '';
          if (index % 7 === 0) edgeFix = 'rounded-l-md'; // Mon
          if (index % 7 === 6) edgeFix = 'rounded-r-md'; // Sun
          return (
            <div
              key={index}
              className={`${getDayClasses(dayObj)} ${edgeFix}`}
              onClick={() => onDateClick(dayObj.date)}
              onMouseEnter={() => onDateHover(dayObj.date)}
            >
              {dayObj.dayNumber}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;