import React, { useRef, useEffect } from 'react';

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);


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
        behavior: 'smooth' // Add smooth scrolling effect
      });
    }
  };
  const toggleMenu =() => menuRef.current.classList.toggle('show_menu');


  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center">
        {/* logo */}
      <div className="container" >
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-[10px] ">
            <span className="w-[35px] h-[35px] bg-blue-950 text-white text[18px] font-[500] rounded-full flex items-center justify-center">
              PB
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700] uppercase">Pratiksha</h2>
              <p className="text-smallTextColor text-[16px] font-[500] uppercase">
                Badgujar
              </p>
            </div>
          </div>
          {/* logoend */}
          {/* menu */}
          <div className="menu" onClick={toggleMenu} ref={menuRef}>
            <ul className="flex item-center gap-[20px]">
              <li>
                <a onClick={handleClick}   href="#about" className="text-smallTextColor font-[600]">
                  About
                </a>
              </li>
              <li>
                <a onClick={handleClick} href="#services" className="text-smallTextColor font-[600]">
                Education
                </a>
              </li>
              <li>
                <a onClick={handleClick} href="#Portfolio" className="text-smallTextColor font-[600]">
                Certification
                </a>
              </li>
              <li>
                <a onClick={handleClick} href="#contact" className="text-smallTextColor font-[600]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] easy-in duration-700">
              <i className="ri-send-plane-fill"></i> Let's talk
            </button>
            <span onClick={toggleMenu} className="text-2xl text-smallTextColor cursor-pointer">
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
