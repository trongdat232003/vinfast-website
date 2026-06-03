import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { promotionsData } from '../data/promotionsData';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const PromotionDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const promo = promotionsData.find(p => p.id === id);

  if (!promo) {
    return (
      <div className="pt-[70px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Không tìm thấy ưu đãi</h2>
          <button 
            onClick={() => navigate('/uu-dai')}
            className="bg-blue-600 text-white px-6 py-3 rounded"
          >
            Quay lại danh sách ưu đãi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[70px] min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-[500px] bg-gray-900 flex items-center justify-center">
        <img 
          src={promo.image} 
          alt={promo.title}
          className="max-w-full max-h-full object-contain p-8"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center max-w-4xl">
          <div>
            <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-bold mb-4 flex items-center">
              <LocalOfferIcon className="mr-2" />
              Giảm giá: {promo.discount}
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">{promo.title}</h1>
            <p className="text-xl text-white">{promo.excerpt}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center text-gray-600 mb-6">
            <CalendarTodayIcon className="mr-2" />
            <span>Có hiệu lực đến: <strong>{new Date(promo.validUntil).toLocaleDateString('vi-VN')}</strong></span>
          </div>

          <div className="prose max-w-none mb-8">
            <h2 className="text-2xl font-bold mb-4">Mô tả chương trình</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {promo.description}
            </p>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-6">Điều kiện áp dụng</h2>
            <div className="space-y-3">
              {promo.conditions.map((condition, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircleIcon className="text-green-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Quan tâm đến chương trình này?</h3>
          <p className="mb-6">Liên hệ ngay với chúng tôi để được tư vấn chi tiết</p>
          <div className="flex gap-4 justify-center">
            <a 
              href="tel:1900232389"
              className="bg-white text-blue-600 px-8 py-3 rounded font-medium hover:bg-gray-100 transition"
            >
              Gọi ngay: 1900 23 23 89
            </a>
            <button 
              onClick={() => navigate('/dat-lai-thu')}
              className="border-2 border-white text-white px-8 py-3 rounded font-medium hover:bg-blue-700 transition"
            >
              Đặt lái thử
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionDetailPage;
