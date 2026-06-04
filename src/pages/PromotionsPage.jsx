import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { promotionsData } from '../data/promotionsData';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import bgImage from '../assets/backgroud/bg_1.png';

const PromotionsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const filterRefs = useRef({});

  const filters = [
    { id: 'all', label: 'Tất cả' },
    { id: 'vf3', label: 'VF 3' },
    { id: 'vf5', label: 'VF 5' },
    { id: 'vf6', label: 'VF 6' },
    { id: 'vf7', label: 'VF 7' },
    { id: 'vf8', label: 'VF 8' },
    { id: 'vf9', label: 'VF 9' },
  ];

  const handleFilterClick = (filterId) => {
    setSelectedFilter(filterId);
    
    // Scroll filter button into view on mobile
    if (filterRefs.current[filterId]) {
      filterRefs.current[filterId].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
  };

  // Filter promotions based on selected filter
  const filteredPromotions = selectedFilter === 'all' 
    ? promotionsData 
    : promotionsData.filter(promo => 
        promo.applicableModels?.includes(selectedFilter.toUpperCase())
      );
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner with Background Image */}
      <section 
        className="relative h-[500px] md:h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        
        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center pt-[70px]">
          <div className="max-w-2xl">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">
              Ưu đãi VinFast
            </h1>
            <p className="text-white text-sm md:text-xl mb-6 md:mb-8 leading-relaxed opacity-90">
              Các chương trình khuyến mãi hấp dẫn dành cho bạn
            </p>
            
            {/* Buttons - Stack vertically on mobile */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              <Link
                to="/xe"
                className="bg-blue-600 text-white px-8 py-3 md:px-10 md:py-4 rounded text-sm md:text-base font-semibold hover:bg-blue-700 transition uppercase text-center"
              >
                Khám phá xe
              </Link>
              <Link
                to="/dat-lai-thu"
                className="border-2 border-white text-white px-8 py-3 md:px-10 md:py-4 rounded text-sm md:text-base font-semibold hover:bg-white hover:text-gray-800 transition uppercase text-center"
              >
                Đặt lái thử
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <div className="bg-white border-b sticky top-[70px] z-40">
        <div className="container mx-auto px-4 py-4">
          {/* Mobile: Horizontal scrollable filters */}
          <div className="flex gap-3 overflow-x-auto scrollbar-hide md:justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                ref={(el) => (filterRefs.current[filter.id] = el)}
                onClick={() => handleFilterClick(filter.id)}
                className={`flex-shrink-0 px-6 py-2.5 rounded-full font-medium transition whitespace-nowrap ${
                  selectedFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Promotions Grid */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPromotions.map((promo) => (
            <Link
              key={promo.id}
              to={`/uu-dai/${promo.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition group"
            >
              <div className="relative w-full h-48 md:h-64 overflow-hidden">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-red-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold flex items-center z-10 text-sm md:text-base">
                  <LocalOfferIcon className="mr-1 text-base md:text-lg" />
                  {promo.discount}
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-2 md:line-clamp-none">
                  {promo.title}
                </h3>
                <p className="text-gray-600 mb-3 md:mb-4 text-sm line-clamp-2 md:line-clamp-none">
                  {promo.excerpt}
                </p>
                <div className="flex items-center text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                  <CalendarTodayIcon className="text-sm md:text-base mr-2" />
                  <span>Hết hạn: {new Date(promo.validUntil).toLocaleDateString('vi-VN')}</span>
                </div>
                <span className="text-blue-600 font-semibold group-hover:underline text-sm md:text-base">
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
