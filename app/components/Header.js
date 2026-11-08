'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Company', path: '/company' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Publications', path: '/publications' },
  ];

  return (
    <>
      <header className={`header glass-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link href="/" className="logo-link">
            <img 
              src="/assets/apex/logo.png" 
              alt="APEX System and Solution Logo" 
              className="logo-img"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-menu">
            <div className="nav-wrapper">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link 
                    key={link.name} 
                    href={link.path} 
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            
            <Link href="/contact" className="btn btn-primary btn-nav-action" style={{ padding: '8px 20px', marginLeft: '12px' }}>
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="menu-toggle" 
            onClick={() => setIsOpen(true)}
            aria-label="Toggle Navigation Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      {/* Drawer Overlay */}
      <div 
        className={`drawer-overlay ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <button 
          className="drawer-close" 
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" x2="6" y1="6" y2="18"></line>
            <line x1="6" x2="18" y1="6" y2="18"></line>
          </svg>
        </button>

        <nav className="drawer-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.name} 
                href={link.path} 
                className={`drawer-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <Link 
          href="/contact" 
          className="btn btn-primary" 
          style={{ width: '100%', marginTop: '30px' }}
          onClick={() => setIsOpen(false)}
        >
          Get in Touch
        </Link>
      </div>
    </>
  );
}
