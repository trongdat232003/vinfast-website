import React from 'react';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import NatureIcon from '@mui/icons-material/Nature';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const TechnologyPage = () => {
  const technologies = [
    {
      icon: <BatteryChargingFullIcon className="text-6xl" />,
      title: 'Công nghệ Pin LFP',
      description: 'Pin LFP (Lithium Iron Phosphate) thế hệ mới với tuổi thọ cao, an toàn tuyệt đối và chi phí tối ưu. Công nghệ pin của VinFast đảm bảo phạm vi hoạt động lên đến 600km và thời gian sạc nhanh chỉ 30 phút.',
      features: [
        'Tuổi thọ cao hơn 30%',
        'An toàn tuyệt đối',
        'Sạc nhanh DC 150kW',
        'Phạm vi lên đến 600km'
      ]
    },
    {
      icon: <SmartToyIcon className="text-6xl" />,
      title: 'Hệ thống ADAS',
      description: 'Hệ thống hỗ trợ người lái tiên tiến (ADAS) cấp 2++ với các tính năng an toàn thông minh, giúp giảm thiểu tai nạn và mang đến trải nghiệm lái xe thoải mái, an toàn.',
      features: [
        'Kiểm soát hành trình thích ứng',
        'Cảnh báo va chạm trước',
        'Hỗ trợ giữ làn đường',
        'Nhận diện biển báo'
      ]
    },
    {
      icon: <SecurityIcon className="text-6xl" />,
      title: 'An toàn 5 sao',
      description: 'Tất cả xe VinFast đều đạt tiêu chuẩn an toàn 5 sao từ Euro NCAP với khung xe siêu bền, hệ thống túi khí đa điểm và các công nghệ an toàn hiện đại nhất.',
      features: [
        'Khung xe siêu bền',
        'Túi khí đa điểm',
        'Phanh ABS, EBD, BA',
        'Cân bằng điện tử ESC'
      ]
    },
    {
      icon: <SpeedIcon className="text-6xl" />,
      title: 'Động cơ điện mạnh mẽ',
      description: 'Động cơ điện VinFast mang đến công suất vượt trội lên đến 400 mã lực, mô-men xoắn cực đại ngay từ vòng tua đầu tiên, tăng tốc 0-100km/h chỉ trong 5.5 giây.',
      features: [
        'Công suất lên đến 400 HP',
        'Mô-men xoắn tức thời',
        'Tăng tốc 0-100km/h: 5.5s',
        'Tốc độ tối đa 200km/h'
      ]
    },
    {
      icon: <NatureIcon className="text-6xl" />,
      title: 'Thân thiện môi trường',
      description: '100% xe điện, không khí thải, góp phần bảo vệ môi trường và giảm ô nhiễm không khí. Mỗi xe VinFast giúp giảm 2.5 tấn CO2 mỗi năm so với xe xăng.',
      features: [
        '0% khí thải CO2',
        'Giảm ô nhiễm không khí',
        'Tiết kiệm năng lượng',
        'Tái chế pin thân thiện'
      ]
    },
    {
      icon: <PhoneAndroidIcon className="text-6xl" />,
      title: 'VinFast Connect',
      description: 'Hệ thống kết nối thông minh cho phép điều khiển xe từ xa, theo dõi trạng thái xe, lịch trình bảo dưỡng và nhiều tính năng tiện ích khác qua ứng dụng di động.',
      features: [
        'Điều khiển xe từ xa',
        'Theo dõi trạng thái xe',
        'Lịch bảo dưỡng thông minh',
        'Tìm xe trong bãi đỗ'
      ]
    }
  ];

  return (
    <div className="pt-[70px] min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Công nghệ VinFast</h1>
          <p className="text-xl">Tiên phong trong công nghệ xe điện thông minh</p>
        </div>
      </div>

      {/* Technologies */}
      <div className="container mx-auto px-4 py-16">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`mb-16 ${index !== technologies.length - 1 ? 'border-b pb-16' : ''}`}
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="text-blue-600 mb-6">{tech.icon}</div>
                <h2 className="text-3xl font-bold mb-4">{tech.title}</h2>
                <p className="text-gray-600 text-lg mb-6">{tech.description}</p>
                <ul className="space-y-3">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-12 h-80 flex items-center justify-center">
                  <div className="text-blue-600 opacity-30">
                    {React.cloneElement(tech.icon, { className: 'text-[200px]' })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyPage;
