# 📅 Interactive Wall Calendar Component

A highly polished, interactive React component inspired by a physical wall calendar aesthetic. This project was built to translate a static design concept into a highly functional, responsive, and user-friendly web component.

## 🚀 Live Demo
**(https://wall-calandertuf.vercel.app/)**

---

## 🎯 Objective
The task was to build a polished React/Vite component honoring the spatial arrangement of a physical calendar. The goal was to maintain a visual hierarchy between the hero imagery, the date grid, and an integrated notes section, ensuring both form and function work seamlessly together.

## ✨ Core Features

### 🖼️ Wall Calendar Aesthetic
- Features a prominent, uniquely styled hero image header acting as the visual anchor.
- Uses complex CSS `clip-path` and geometric layering to emulate a modern physical layout.
- Clean typography and vibrant background layering to create a striking visual hierarchy.

### 🗓️ Day Range Selector
- **Interactive Grid:** Allows users to organically select a **start date** and an **end date**.
- **Visual States:** Clear visual indicators for the selected start date, end date, and the intermediate days grouped in between.
- **Validation:** Handles logical constraints seamlessly (e.g. clicking an earlier date resets the start date, handling overlap).

### 📝 Integrated Notes Section
- A dedicated, functional notes area complementing the calendar.
- Users can jot down general memos for the month.
- Styled to resemble a physical notepad attached to the side or bottom depending on the viewport.

### 📱 Fully Responsive Design
- **Desktop:** Adopts an expansive, side-by-side or clearly segmented layout honoring the inspiration.
- **Mobile:** Gracefully collapses into a vertically stacked configuration while keeping the intricate date selection and note-taking interfaces usable on touch screens.

## 🎨 Standout Additions (Creative Liberty)
- **Glassmorphism UI:** Integrated frosted glass effects (`backdrop-blur`) on navigation buttons and headers for a premium feel.
- **Micro-interactions:** Smooth hover scaling, state transitions, and interactive button feedback.
- **CSS Polygon Clipping:** Utilized advanced Tailwind arbitary values `[clip-path:...]` to create unique overlapping geometric shapes without relying on overweight SVG wrappers.

---

## 🛠️ Tech Stack
- **React.js** (Functional Components, Hooks)
- **Tailwind CSS** (Styling, Layouts, Responsive Design)
- **Vite** (Build Tool, Fast HMR)

---

## 💻 Local Setup & Installation

To run this project locally, simply follow these steps:

1. **Clone the repository** (if not already done)
   ```bash
   git clone https://github.com/Pratibha-Maurya23/Projects-Using-React.git
   cd takeUfarwordAssisment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```

4. **View in Browser**
   Open your browser and navigate to the URL provided in the terminal (usually `http://localhost:5173`).

---

## 📂 Project Structure Overview

```text
src/
├── assets/          # Images (Hero images, hanging hooks)
├── components/      # Reusable React components
│   ├── WallCalendar.jsx    # Main Layout Wrapper
│   ├── CalendarHeader.jsx  # Hero Image & Month/Year Display
|   ├── HangingHooks.jsx    # Hanging Hooks for the Calendar
│   ├── CalendarGrid.jsx    # Date Math & Range Selection Logic
│   └── NotesSection.jsx    # Sticky Note Board
├── App.jsx          # Entry Point
└── index.css        # Tailwind directives and base globals
```
