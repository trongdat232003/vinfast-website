import React from 'react';
import { Link } from 'react-router-dom';
import { carsData } from '../data/carsData';
import { newsData } from '../data/newsData';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import PublicIcon from '@mui/icons-material/Public';
import NatureIcon from '@mui/icons-material/Nature';
import SecurityIcon from '@mui/icons-material/Security';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import bgImage from '../assets/backgroud/bg_1.png';
import ChargingStationMap from '../components/ChargingStationMap';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <section 
        className="relative h-[700px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-white text-[4rem] md:text-[5rem] font-bold mb-4 leading-tight">
              Tương lai<br />của di chuyển
            </h1>
            <p className="text-white text-[16px] mb-8 leading-relaxed opacity-90">
              VinFast - Vì một tương lai xanh<br />
              thông minh và bền vững
            </p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              <Link
                to="/xe"
                className="bg-blue-600 text-white px-10 py-4 rounded text-[14px] font-semibold hover:bg-blue-700 transition uppercase text-center"
              >
                Khám phá xe
              </Link>
              <Link
                to="/dat-lai-thu"
                className="border-2 border-white text-white px-10 py-4 rounded text-[14px] font-semibold hover:bg-white hover:text-gray-800 transition uppercase text-center"
              >
                Đặt lái thử
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar - Overlapping */}
      <section className="relative -mt-[60px] z-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-6 md:p-8">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <BatteryChargingFullIcon className="text-blue-500 text-4xl" />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1">100%</h3>
                <p className="text-gray-600 text-sm">Xe điện thông minh</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <SecurityIcon className="text-blue-500 text-4xl" />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1">An toàn vượt trội</h3>
                <p className="text-gray-600 text-sm">Tiêu chuẩn 5 sao</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <SmartToyIcon className="text-blue-500 text-4xl" />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1">Công nghệ tiên tiến</h3>
                <p className="text-gray-600 text-sm">Trải nghiệm đẳng cấp</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <PublicIcon className="text-blue-500 text-4xl" />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1">Hệ sinh thái sạc</h3>
                <p className="text-gray-600 text-sm">Phủ khắp toàn quốc</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <NatureIcon className="text-blue-500 text-4xl" />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1">Tiết kiệm chi phí</h3>
                <p className="text-gray-600 text-sm">Vận hành bền vững</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Dòng xe điện VinFast</h2>
            <p className="text-gray-600">Khám phá các mẫu xe điện hiện đại, thông minh và thân thiện môi trường</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carsData.slice(0, 6).map((car) => (
              <Link 
                key={car.id} 
                to={`/xe/${car.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition group"
              >
                <div className="overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-64 object-contain group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                  <p className="text-gray-600 mb-4">{car.category}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-blue-600 font-bold text-xl">
                        {car.price.toLocaleString('vi-VN')} VNĐ
                      </div>
                      {car.originalPrice && (
                        <div className="text-gray-400 line-through text-sm">
                          {car.originalPrice.toLocaleString('vi-VN')} VNĐ
                        </div>
                      )}
                    </div>
                    <span className="text-blue-600 font-semibold">Chi tiết →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/xe"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded font-medium hover:bg-blue-700 transition"
            >
              XEM TẤT CẢ CÁC DÒNG XE
            </Link>
          </div>
        </div>
      </section>

      {/* Charging Station Map Section */}
      <ChargingStationMap />

      {/* News Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Tin tức mới nhất</h2>
            <p className="text-gray-600">Cập nhật thông tin mới nhất về VinFast</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.slice(0, 3).map((news) => (
              <Link
                key={news.id}
                to={`/tin-tuc/${news.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition group"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 mb-2">{news.category}</div>
                  <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{news.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{new Date(news.date).toLocaleDateString('vi-VN')}</span>
                    <span className="text-blue-600 font-semibold">Đọc thêm →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/tin-tuc"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded font-medium hover:bg-blue-700 transition"
            >
              XEM TẤT CẢ TIN TỨC
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
