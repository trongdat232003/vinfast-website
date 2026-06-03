import React from 'react';
import PublicIcon from '@mui/icons-material/Public';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import FactoryIcon from '@mui/icons-material/Factory';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const AboutPage = () => {
  const achievements = [
    {
      icon: <DirectionsCarIcon className="text-5xl" />,
      number: '10+',
      title: 'Mẫu xe điện',
      description: 'Đa dạng dòng sản phẩm'
    },
    {
      icon: <PublicIcon className="text-5xl" />,
      number: '50+',
      title: 'Quốc gia',
      description: 'Có mặt toàn cầu'
    },
    {
      icon: <GroupsIcon className="text-5xl" />,
      number: '100,000+',
      title: 'Khách hàng',
      description: 'Tin tưởng sử dụng'
    },
    {
      icon: <FactoryIcon className="text-5xl" />,
      number: '3',
      title: 'Nhà máy',
      description: 'Việt Nam, Mỹ, Đức'
    }
  ];

  const milestones = [
    {
      year: '2017',
      title: 'Thành lập VinFast',
      description: 'VinFast được thành lập với tầm nhìn trở thành thương hiệu ô tô toàn cầu'
    },
    {
      year: '2019',
      title: 'Ra mắt xe đầu tiên',
      description: 'VinFast Lux A2.0 và Lux SA2.0 chính thức ra mắt thị trường'
    },
    {
      year: '2021',
      title: 'Chuyển đổi 100% xe điện',
      description: 'VinFast quyết định chuyển đổi hoàn toàn sang sản xuất xe điện'
    },
    {
      year: '2022',
      title: 'Xuất khẩu quốc tế',
      description: 'VinFast VF 8 và VF 9 chính thức có mặt tại thị trường Mỹ, châu Âu'
    },
    {
      year: '2023',
      title: 'Niêm yết trên NASDAQ',
      description: 'VinFast chính thức niêm yết trên sàn chứng khoán NASDAQ'
    },
    {
      year: '2024',
      title: 'Nhà máy tại Mỹ',
      description: 'Nhà máy sản xuất tại Bắc Carolina, Mỹ đi vào hoạt động'
    }
  ];

  return (
    <div className="pt-[70px] min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">Về VinFast</h1>
          <p className="text-xl leading-relaxed">
            VinFast là thương hiệu ô tô điện hàng đầu Việt Nam, với tầm nhìn trở thành 
            thương hiệu ô tô thông minh, toàn cầu, góp phần tạo ra một tương lai di chuyển 
            bền vững và thân thiện với môi trường.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-blue-600 mb-4">
              <TrendingUpIcon className="text-6xl" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Tầm nhìn</h2>
            <p className="text-gray-700 leading-relaxed">
              Trở thành thương hiệu ô tô điện thông minh toàn cầu, góp phần tạo ra 
              tương lai di chuyển bền vững cho nhân loại. VinFast hướng tới việc 
              cung cấp các giải pháp di chuyển xanh, thông minh và an toàn cho mọi người.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-blue-600 mb-4">
              <EmojiEventsIcon className="text-6xl" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Sứ mệnh</h2>
            <p className="text-gray-700 leading-relaxed">
              Tiên phong trong cuộc cách mạng xe điện, mang đến cho khách hàng những 
              sản phẩm chất lượng cao với công nghệ tiên tiến nhất. VinFast cam kết 
              không ngừng đổi mới để tạo ra giá trị bền vững cho xã hội.
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Thành tựu nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-blue-600 mb-3 flex justify-center">
                  {item.icon}
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{item.number}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12">Hành trình phát triển</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 w-32 text-right pr-8">
                  <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-grow bg-white rounded-lg shadow-lg p-6 relative">
                  <div className="absolute -left-3 top-8 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
                  <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Hãy là một phần của tương lai</h2>
          <p className="text-xl mb-8">Trải nghiệm xe điện VinFast ngay hôm nay</p>
          <div className="flex gap-4 justify-center">
            <a
              href="/dat-lai-thu"
              className="bg-white text-blue-600 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition"
            >
              Đặt lái thử
            </a>
            <a
              href="/xe"
              className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-blue-700 transition"
            >
              Khám phá dòng xe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
