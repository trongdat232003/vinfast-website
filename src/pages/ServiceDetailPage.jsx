import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import EvStationIcon from '@mui/icons-material/EvStation';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SecurityIcon from '@mui/icons-material/Security';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const iconMap = {
  BuildCircle: BuildCircleIcon,
  EvStation: EvStationIcon,
  AccountBalance: AccountBalanceIcon,
  Security: SecurityIcon,
  LocalShipping: LocalShippingIcon,
  PhoneAndroid: PhoneAndroidIcon
};

const ServiceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="pt-[70px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Không tìm thấy dịch vụ</h2>
          <button 
            onClick={() => navigate('/dich-vu')}
            className="bg-blue-600 text-white px-6 py-3 rounded"
          >
            Quay lại danh sách dịch vụ
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[service.icon] || BuildCircleIcon;

  return (
    <div className="pt-[70px] min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center mb-6">
            <IconComponent className="text-6xl mr-4" />
            <h1 className="text-5xl font-bold">{service.title}</h1>
          </div>
          <p className="text-xl">{service.excerpt}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-96 object-cover rounded-lg mb-8"
          />
          
          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {service.description}
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Tính năng nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircleIcon className="text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Cần hỗ trợ thêm?</h3>
          <p className="text-gray-600 mb-6">Liên hệ với chúng tôi để được tư vấn chi tiết</p>
          <div className="flex gap-4 justify-center">
            <a 
              href="tel:1900232389"
              className="bg-blue-600 text-white px-8 py-3 rounded font-medium hover:bg-blue-700 transition"
            >
              Gọi ngay: 1900 23 23 89
            </a>
            <button 
              onClick={() => navigate('/dat-lai-thu')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded font-medium hover:bg-blue-50 transition"
            >
              Đặt lịch hẹn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
