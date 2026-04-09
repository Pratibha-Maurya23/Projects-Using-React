import React, { useState, useEffect } from 'react';

const NotesSection = ({ monthId }) => {
  const [notes, setNotes] = useState('');

  // Load notes when the month changes
  useEffect(() => {
    const savedNotes = localStorage.getItem(`calendar_notes_${monthId}`);
    if (savedNotes) {
      setNotes(savedNotes);
    } else {
      setNotes('');
    }
  }, [monthId]);

  // Save notes on change
  const handleNotesChange = (e) => {
    const newNotes = e.target.value;
    setNotes(newNotes);
    localStorage.setItem(`calendar_notes_${monthId}`, newNotes);
  };

  return (
    <div className="w-full md:w-[30%] flex-none flex flex-col order-2 md:order-1">
      <div className="text-[0.9rem] font-bold text-text-main mb-5 uppercase tracking-[1px]">Notes</div>
      <textarea
        className="grow w-full min-h-[150px] md:min-h-[250px] border-none bg-transparent resize-none font-sans text-[1rem] leading-[2rem] text-text-main outline-none bg-lined-paper"
        value={notes}
        onChange={handleNotesChange}
        placeholder="Type your notes here..."
      />
    </div>
  );
};

export default NotesSection;
