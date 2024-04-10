import React, { useRef, useEffect, useState } from 'react';

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetAttr);

    if (targetElement) {
      const location = targetElement.offsetTop;

      window.scrollTo({
        top: location - 80,
        left: 0,
        behavior: 'smooth'
      });
    }
  };

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <header
      ref={headerRef}
      className={`w-full h-[80px] leading-[80px] flex items-center ${
        isMenuOpen ? 'menu-open' : ''
      }`}
    >
      {/* Logo */}
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-blue-950 text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              PB
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700] uppercase">
                Pratiksha
              </h2>
              <p className="text-smallTextColor text-[16px] font-[500] uppercase">
                Badgujar
              </p>
            </div>
          </div>
          {/* Menu */}
          <div className="menu" onClick={toggleMenu} ref={menuRef}>
            <ul className="flex gap-[20px]">
              <li>
                <a href="#home" onClick={handleClick}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleClick}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={handleClick}>
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={handleClick}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleClick}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Menu End */}
          <div className="mobile-menu-icon" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
