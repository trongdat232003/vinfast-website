import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
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

const ServicesPage = () => {
  return (
    <div className="pt-[70px] min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Dịch vụ VinFast</h1>
          <p className="text-xl">Trải nghiệm dịch vụ tốt nhất cho khách hàng</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || BuildCircleIcon;
            return (
              <Link
                key={service.id}
                to={`/dich-vu/${service.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition group"
              >
                <div className="p-8">
                  <div className="text-blue-600 mb-4">
                    <IconComponent className="text-6xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.excerpt}</p>
                  <span className="text-blue-600 font-semibold group-hover:underline">
                    Xem chi tiết →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
