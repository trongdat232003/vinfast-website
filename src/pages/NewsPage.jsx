import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../data/newsData';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(newsData.map(news => news.category))];

  const filteredNews = selectedCategory === 'all'
    ? newsData
    : newsData.filter(news => news.category === selectedCategory);

  return (
    <div className="pt-[70px] min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Tin tức VinFast</h1>
          <p className="text-xl">Cập nhật thông tin mới nhất về VinFast</p>
        </div>
      </div>

      {/* Filter */}
      <div className="bg-white shadow-md sticky top-[70px] z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tất cả
            </button>
            {categories.filter(c => c !== 'all').map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <Link
              key={news.id}
              to={`/tin-tuc/${news.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition group"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {news.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{news.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{news.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <CalendarTodayIcon className="text-base mr-1" />
                    <span>{new Date(news.date).toLocaleDateString('vi-VN')}</span>
                  </div>
                  <div className="flex items-center">
                    <PersonIcon className="text-base mr-1" />
                    <span className="text-xs">{news.author.split(' ')[0]}</span>
                  </div>
                </div>
                
                <span className="text-blue-600 font-semibold group-hover:underline">
                  Đọc thêm →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
