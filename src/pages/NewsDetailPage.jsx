import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { newsData } from '../data/newsData';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NewsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const news = newsData.find(n => n.id === id);

  if (!news) {
    return (
      <div className="pt-[70px] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Không tìm thấy bài viết</h2>
          <button 
            onClick={() => navigate('/tin-tuc')}
            className="bg-blue-600 text-white px-6 py-3 rounded"
          >
            Quay lại tin tức
          </button>
        </div>
      </div>
    );
  }

  const relatedNews = newsData.filter(n => n.id !== id && n.category === news.category).slice(0, 3);

  return (
    <div className="pt-[70px] min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${news.image})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-4xl -mt-32 relative z-10">
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <button 
            onClick={() => navigate('/tin-tuc')}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-6"
          >
            <ArrowBackIcon className="mr-2" />
            Quay lại tin tức
          </button>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <CategoryIcon className="text-base mr-1" />
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
                {news.category}
              </span>
            </div>
            <div className="flex items-center">
              <CalendarTodayIcon className="text-base mr-1" />
              <span>{new Date(news.date).toLocaleDateString('vi-VN')}</span>
            </div>
            <div className="flex items-center">
              <PersonIcon className="text-base mr-1" />
              <span>{news.author}</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-6">{news.title}</h1>
          
          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-6 italic">{news.excerpt}</p>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              {news.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Related News */}
        {relatedNews.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Bài viết liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedNews.map((related) => (
                <Link
                  key={related.id}
                  to={`/tin-tuc/${related.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition group"
                >
                  <div className="overflow-hidden h-40">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{related.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{related.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetailPage;
