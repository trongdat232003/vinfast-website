import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { carsData } from '../data/carsData';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import SpeedIcon from '@mui/icons-material/Speed';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EventSeatIcon from '@mui/icons-material/EventSeat';

const CarDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  
  const car = carsData.find(c => c.id === id);

  if (!car) {
    return (
      <div className="pt-[70px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Không tìm thấy xe</h2>
          <button 
            onClick={() => navigate('/xe')}
            className="bg-blue-600 text-white px-6 py-3 rounded"
          >
            Quay lại danh sách xe
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[70px] min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img src={car.image} alt={car.name} className="w-full" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">{car.name}</h1>
              <p className="text-gray-600 mb-6">{car.category}</p>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {car.price.toLocaleString('vi-VN')} VNĐ
              </div>
              {car.originalPrice && (
                <div className="text-lg text-gray-400 line-through mb-6">
                  {car.originalPrice.toLocaleString('vi-VN')} VNĐ
                </div>
              )}
              
              <div className="flex gap-4 mb-8">
                <button 
                  onClick={() => navigate('/dat-lai-thu')}
                  className="bg-blue-600 text-white px-8 py-3 rounded font-semibold hover:bg-blue-700"
                >
                  ĐẶT LÁI THỬ
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded font-semibold hover:bg-blue-50">
                  ĐẶT MUA
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow">
                <div className="text-center">
                  <BatteryChargingFullIcon className="text-blue-600 text-4xl mb-2" />
                  <div className="text-sm text-gray-500">Phạm vi</div>
                  <div className="font-semibold">{car.specs.range}</div>
                </div>
                <div className="text-center">
                  <SpeedIcon className="text-blue-600 text-4xl mb-2" />
                  <div className="text-sm text-gray-500">Công suất</div>
                  <div className="font-semibold">{car.specs.power}</div>
                </div>
                <div className="text-center">
                  <DirectionsCarIcon className="text-blue-600 text-4xl mb-2" />
                  <div className="text-sm text-gray-500">Tốc độ tối đa</div>
                  <div className="font-semibold">{car.specs.topSpeed}</div>
                </div>
                <div className="text-center">
                  <EventSeatIcon className="text-blue-600 text-4xl mb-2" />
                  <div className="text-sm text-gray-500">Số chỗ</div>
                  <div className="font-semibold">{car.specs.seats}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="flex gap-4 mb-8 border-b">
          <button 
            onClick={() => setActiveTab(0)}
            className={`px-6 py-3 font-semibold ${activeTab === 0 ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          >
            Tính năng
          </button>
          <button 
            onClick={() => setActiveTab(1)}
            className={`px-6 py-3 font-semibold ${activeTab === 1 ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          >
            Thông số kỹ thuật
          </button>
          <button 
            onClick={() => setActiveTab(2)}
            className={`px-6 py-3 font-semibold ${activeTab === 2 ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
          >
            Màu sắc
          </button>
        </div>

        {activeTab === 0 && (
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6">Tính năng nổi bật</h2>
            <p className="text-gray-600 mb-6">{car.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {car.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircleIcon className="text-blue-600 flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6">Thông số kỹ thuật</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Động cơ & Hiệu suất</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Công suất tối đa</span>
                    <span className="font-semibold">{car.specs.power}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Tốc độ tối đa</span>
                    <span className="font-semibold">{car.specs.topSpeed}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Phạm vi hoạt động</span>
                    <span className="font-semibold">{car.specs.range}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Pin & Sạc</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Dung lượng pin</span>
                    <span className="font-semibold">{car.specs.battery}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Số chỗ ngồi</span>
                    <span className="font-semibold">{car.specs.seats} chỗ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6">Màu sắc</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {car.colors.map((color, index) => (
                <div key={index} className="border rounded-lg p-4 text-center hover:shadow-lg transition cursor-pointer">
                  <div className="h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded mb-3"></div>
                  <div className="font-semibold">{color}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDetailPage;
