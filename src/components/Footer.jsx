import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo1 from '../assets/logo/logo_1.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src={logo1}
              alt="VinFast" 
              className="h-8  mb-4"
            />
            <p className="text-sm mb-4">
              VinFast - Thương hiệu ô tô điện hàng đầu Việt Nam, tiên phong trong cuộc cách mạng di chuyển xanh.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" className="hover:text-blue-500 transition">
                <FacebookIcon />
              </a>
              <a href="https://youtube.com" className="hover:text-red-500 transition">
                <YouTubeIcon />
              </a>
              <a href="https://instagram.com" className="hover:text-pink-500 transition">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Sản phẩm</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/xe" className="hover:text-white transition">Dòng xe</Link></li>
              <li><Link to="/cong-nghe" className="hover:text-white transition">Công nghệ</Link></li>
              <li><Link to="/uu-dai" className="hover:text-white transition">Ưu đãi</Link></li>
              <li><Link to="/dat-lai-thu" className="hover:text-white transition">Đặt lái thử</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Dịch vụ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/dich-vu" className="hover:text-white transition">Dịch vụ</Link></li>
              <li><Link to="/tin-tuc" className="hover:text-white transition">Tin tức</Link></li>
              <li><Link to="/ve-vinfast" className="hover:text-white transition">Về VinFast</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Liên hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <PhoneIcon className="text-blue-500 mr-2 text-xl" />
                <span>1900 23 23 89</span>
              </li>
              <li className="flex items-start">
                <EmailIcon className="text-blue-500 mr-2 text-xl" />
                <span>support@vinfastauto.com</span>
              </li>
              <li className="flex items-start">
                <LocationOnIcon className="text-blue-500 mr-2 text-xl" />
                <span>Phạm Văn Đồng, Cổ Nhuế, Bắc Từ Liêm, Hà Nội</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2026 VinFast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
