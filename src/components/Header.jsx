import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo1 from '../assets/logo/logo_1.png';
import logo2 from '../assets/logo/logo_2.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const headerClass = scrolled || !isHomePage
    ? 'bg-white shadow-md'
    : 'bg-transparent';

  const textClass = scrolled || !isHomePage ? 'text-gray-800' : 'text-white';
  
  // Logo 1 (trắng) lớn hơn khi load trang, Logo 2 (màu) nhỏ hơn khi scroll
  const logoSrc = scrolled || !isHomePage ? logo2 : logo1;
  const logoSize = scrolled || !isHomePage ? 'h-[35px]' : 'h-[35px]';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
        <div className="container mx-auto px-4 lg:px-4">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo - Left */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src={logoSrc} alt="VinFast" className={`transition-all duration-300 ${logoSize}`} />
              </Link>
            </div>

            {/* Menu - Center (Desktop only) */}
            <nav className="hidden lg:flex items-center justify-center space-x-8 flex-1">
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
              {/* Desktop: Đặt lái thử button */}
              <Link
                to="/dat-lai-thu"
                className="hidden md:block bg-blue-600 text-white px-5 py-2.5 rounded text-[14px] font-medium hover:bg-blue-700 transition"
              >
                ĐẶT LÁI THỬ
              </Link>

              {/* Mobile: Hamburger menu - sát bên phải */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`lg:hidden -mr-2 p-2 rounded-lg hover:bg-opacity-10 hover:bg-gray-500 transition ${textClass}`}
                aria-label="Open menu"
              >
                <MenuIcon className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <img src={logo2} alt="VinFast" className="h-8" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              <Link
                to="/xe"
                className="block px-4 py-3 text-gray-800 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
              >
                Xe
              </Link>
              <Link
                to="/cong-nghe"
                className="block px-4 py-3 text-gray-800 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
              >
                Công nghệ
              </Link>
              <Link
                to="/dich-vu"
                className="block px-4 py-3 text-gray-800 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
              >
                Dịch vụ
              </Link>
              <Link
                to="/uu-dai"
                className="block px-4 py-3 text-gray-800 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
              >
                Ưu đãi
              </Link>
              <Link
                to="/tin-tuc"
                className="block px-4 py-3 text-gray-800 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
              >
                Tin tức
              </Link>
              <Link
                to="/ve-vinfast"
                className="block px-4 py-3 text-gray-800 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
              >
                Về VinFast
              </Link>

              {/* Đặt lái thử button - ngay sau menu items */}
              <Link
                to="/dat-lai-thu"
                className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg text-sm font-bold hover:bg-blue-700 transition mt-4"
              >
                ĐẶT LÁI THỬ
              </Link>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Header;
