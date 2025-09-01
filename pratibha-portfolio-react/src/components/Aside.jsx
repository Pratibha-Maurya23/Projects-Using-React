// components/Aside.js
import React from 'react';

const navItems = [
  { id: "home", label: "Home", icon: "fa fa-home" },
  { id: "about", label: "About", icon: "fa fa-user" },
  { id: "service", label: "Services", icon: "fa fa-list" },
  { id: "portfolio", label: "Portfolio", icon: "fa fa-briefcase" },
  { id: "contact", label: "Contact", icon: "fa fa-comments" },
];

const Aside = ({ activeSection, onNavClick, asideOpen, onToggleAside }) => {
  return (
    <div className={`aside ${asideOpen ? "open" : ""}`}>
      {/* Logo */}
      <div className="logo">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavClick("home");
          }}
        >
          P<span>ratibha</span>
        </a>
      </div>

      {/* Toggler (for mobile view) */}
      <div
        className={`nav-toggler ${asideOpen ? "open" : ""}`}
        onClick={onToggleAside}
      >
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className="nav">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                onNavClick(item.id);
              }}
            >
              <i className={item.icon}></i> {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Aside;