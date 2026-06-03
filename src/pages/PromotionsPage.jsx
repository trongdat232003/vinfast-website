import React from 'react';
import { Link } from 'react-router-dom';
import { promotionsData } from '../data/promotionsData';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const PromotionsPage = () => {
  return (
    <div className="pt-[70px] min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Ưu đãi VinFast</h1>
          <p className="text-xl">Các chương trình khuyến mãi hấp dẫn</p>
        </div>
      </div>

      {/* Promotions Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotionsData.map((promo) => (
            <Link
              key={promo.id}
              to={`/uu-dai/${promo.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition group"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold flex items-center z-10">
                  <LocalOfferIcon className="mr-1" />
                  {promo.discount}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{promo.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <CalendarTodayIcon className="text-base mr-2" />
                  <span>Hết hạn: {new Date(promo.validUntil).toLocaleDateString('vi-VN')}</span>
                </div>
                <span className="text-blue-600 font-semibold group-hover:underline">
                  Xem chi tiết →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionsPage;
