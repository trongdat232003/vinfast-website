import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo1 from '../assets/logo/logo_1.png';
import logo2 from '../assets/logo/logo_2.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = scrolled || !isHomePage
    ? 'bg-white shadow-md'
    : 'bg-transparent';

  const textClass = scrolled || !isHomePage ? 'text-gray-800' : 'text-white';
  
  // Logo 1 (trắng) lớn hơn khi load trang, Logo 2 (màu) nhỏ hơn khi scroll
  const logoSrc = scrolled || !isHomePage ? logo2 : logo1;
  const logoSize = scrolled || !isHomePage ? 'h-[35px]' : 'h-[35px]';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center h-[70px]">
          {/* Logo - Left */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logoSrc} alt="VinFast" className={`transition-all duration-300 ${logoSize}`} />
            </Link>
          </div>

          {/* Menu - Center */}
          <nav className="hidden lg:flex items-center justify-center space-x-8">
            <Link to="/xe" className={`font-medium text-[17px] hover:text-blue-600 transition whitespace-nowrap ${textClass}`}>
              Xe
            </Link>
            <Link to="/cong-nghe" className={`font-medium text-[17px] hover:text-blue-600 transition whitespace-nowrap ${textClass}`}>
              Công nghệ
            </Link>
            <Link to="/dich-vu" className={`font-medium text-[17px] hover:text-blue-600 transition whitespace-nowrap ${textClass}`}>
              Dịch vụ
            </Link>
            <Link to="/uu-dai" className={`font-medium text-[17px] hover:text-blue-600 transition whitespace-nowrap ${textClass}`}>
              Ưu đãi
            </Link>
            <Link to="/tin-tuc" className={`font-medium text-[17px] hover:text-blue-600 transition whitespace-nowrap ${textClass}`}>
              Tin tức
            </Link>
            <Link to="/ve-vinfast" className={`font-medium text-[17px] hover:text-blue-600 transition whitespace-nowrap ${textClass}`}>
              Về VinFast
            </Link>
          </nav>

          {/* Actions - Right */}
          <div className="flex items-center justify-end">
            <Link
              to="/dat-lai-thu"
              className="bg-blue-600 text-white px-5 py-2.5 rounded text-[14px] font-medium hover:bg-blue-700 transition"
            >
              ĐẶT LÁI THỬ
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
