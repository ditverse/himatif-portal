import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Beranda' },
    { to: '/cabinet', label: 'Kabinet' },
    { to: '/departments', label: 'Departemen' },
    { to: '/blog', label: 'Blog' },
    { to: '/timeline', label: 'Timeline' },
    { to: '/contact', label: 'Kontak' },
    { to: '/aspirasi', label: 'Aspirasi' },
  ];

  return (
    <nav 
      className={`bg-surface-container-lowest fixed top-0 w-full z-50 border-b border-surface-container-high transition-all duration-300 ${
        isScrolled ? 'shadow-md h-16' : 'h-20'
      }`}
      id="navbar"
    >
      <div className="flex justify-between items-center h-full px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        {/* Brand */}
        <Link className="text-headline-md font-headline-md font-extrabold text-custom-dark tracking-tight" to="/">
          HIMATIF<span className="text-primary-container">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link font-label-md text-label-md py-1 transition-all duration-300 ${
                  isActive ? 'active text-custom-dark font-bold' : 'text-secondary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center">
          <Link 
            className="px-6 py-2.5 border border-primary-container text-primary-container font-label-md text-label-md rounded hover:bg-primary-container hover:text-white transition-colors duration-300"
            to="/admin"
          >
            Dashboard
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-custom-dark p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface-container-lowest border-b border-surface-container-high px-6 py-4 flex flex-col gap-4 animate-fade-in shadow-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-base py-2 border-b border-surface-container-low transition-all ${
                  isActive ? 'text-primary font-bold' : 'text-secondary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            className="bg-primary-container text-white text-center py-3 rounded font-semibold mt-2 hover:bg-inverse-primary transition-colors"
            to="/admin"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
}
