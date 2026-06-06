# 🛍️ Myntra Clone — E-Commerce Web Application

[![React 19](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://react.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux--Toolkit-764ABC?logo=redux&logoColor=white&style=for-the-badge)](https://redux-toolkit.js.org/)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.3.6-7952B3?logo=bootstrap&logoColor=white&style=for-the-badge)](https://getbootstrap.com/)
[![Express.js](https://img.shields.io/badge/Express-4.18.2-000000?logo=express&logoColor=white&style=for-the-badge)](https://expressjs.com/)
[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel&logoColor=white&style=for-the-badge)](https://mytra-clone-react.vercel.app/)

A full-featured clone of the popular fashion e-commerce platform **Myntra**. Built with a modern tech stack utilizing React 19 for building interactive components, Redux Toolkit for efficient global state management, Bootstrap 5 for visual fidelity, and a Node/Express backend for data serving.

🚀 **Live Demo:** [https://mytra-clone-react.vercel.app/](https://mytra-clone-react.vercel.app/)

---

## 🌟 Key Features

- **🏠 Dynamic Homepage:** Browse items dynamically fetched from the backend API.
- **🏷️ Product Card Component:** View ratings, prices, discounts, and quick add-to-bag shortcuts.
- **🛍️ Interactive Shopping Bag:** Select, preview, and delete items from your bag.
- **💳 Real-time Order Summary:** Live price calculations including item count, total MRP, discounts, convenience fee, and final payable amount.
- **⚡ Redux Toolkit State Management:** Seamless state persistence and update tracking across the bag items, general listings, and API fetch state.
- **🔄 Async Loading spinners:** Fully integrated asynchronous API status tracker to display loading spinners during backend handshakes.
- **📱 Fully Responsive Design:** Clean layout adaptivity for desktops, tablets, and mobile devices using Bootstrap 5.

---

## 🛠️ Tech Stack & Packages

### Client (Frontend)
- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vite.dev/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) & [React Redux](https://react-redux.js.org/)
- **Styling:** [Bootstrap 5](https://getbootstrap.com/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Routing:** [React Router DOM v7](https://reactrouter.com/)

### Backend (Data Server)
- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Process Manager:** [Nodemon](https://nodemon.io/) (for local development)

---

## 📁 Project Structure

```bash
Myntra Clone using React/
├── Backend/                 # Express.js data API
│   ├── data/                # Mock database containing product list
│   │   └── items.json
│   ├── app.js               # Main server entry file
│   └── package.json
└── client/                  # Vite + React Frontend
    ├── public/              # Static public assets (logos, images, etc.)
    ├── src/
    │   ├── assets/          # Brand designs
    │   ├── components/      # Reusable functional UI components
    │   │   ├── BagItem.jsx       # Card component inside the cart
    │   │   ├── BagSummary.jsx    # Pricing & checkout calculations
    │   │   ├── Fetchitems.jsx    # Fetch wrapper to fetch items from backend
    │   │   ├── Header.jsx        # Navigation bar & category menus
    │   │   ├── Footer.jsx        # Bottom links & credits section
    │   │   ├── HomeItem.jsx      # Product listing card component
    │   │   └── LoadingSpinner.jsx# UI Spinner during backend fetching
    │   ├── routes/          # Pages/Views
    │   │   ├── App.jsx           # Main layout structure
    │   │   ├── Bag.jsx           # Cart page view
    │   │   └── Home.jsx          # Shopping homepage grid view
    │   ├── store/           # Redux Toolkit global store config
    │   │   ├── index.js          # Main Redux Store config
    │   │   ├── BagSlice.js       # Shopping bag reducer & actions
    │   │   ├── ItemsSlice.js     # Catalog items store state
    │   │   └── fetchStatusSlice.js# Network state manager (loading, loaded)
    │   ├── main.jsx         # Application initializer
    │   └── App.css          # Core customized styles
    ├── package.json
    └── vite.config.js
```

---

## 🚀 Getting Started

To set up the clone locally, run both the backend data server and the client frontend.

### 1. Clone the repository
```bash
git clone https://github.com/Pratibha-Maurya23/Projects-Using-React.git
cd "Projects-Using-React/Myntra Clone using React"
```

### 2. Set up the Backend
```bash
cd Backend
npm install
npm run dev
```
The backend server will launch on [http://localhost:8080](http://localhost:8080).

### 3. Set up the Client (Frontend)
Open a new terminal tab/window in the project root:
```bash
cd client
npm install
npm run dev
```
The React application will launch locally at [http://localhost:5173](http://localhost:5173).

---

## 🤝 Contributing

Contributions, bug reports, and pull requests are welcome! Feel free to raise issues or submit PRs.

---

## 📝 License

This project is licensed under the ISC License.
