import vf3Image from '../assets/car/vf3.png';
import vf5Image from '../assets/car/vf5.png';
import vf6Image from '../assets/car/vf6.png';
import vf7Image from '../assets/car/vf7.png';
import vf8Image from '../assets/car/vf8.png';
import vf9Image from '../assets/car/vf9.png';

export const carsData = [
  {
    id: 'vf-3',
    name: 'VF 3',
    category: 'Mini SUV',
    price: 302000000,
    originalPrice: 320000000,
    image: vf3Image,
    description: 'VF 3 là mẫu xe điện mini SUV với thiết kế vuông vức, hiện đại, phù hợp cho việc di chuyển đô thị với chi phí vận hành cực kỳ tiết kiệm.',
    specs: {
      range: '210 km (NEDC)',
      power: '43 mã lực (32 kW)',
      topSpeed: '100 km/h',
      battery: '18.64 kWh',
      seats: 4
    },
    features: [
      'Thiết kế nhỏ gọn, dễ di chuyển đô thị',
      'Chi phí vận hành cực thấp',
      'Màn hình cảm ứng 10 inch',
      'Kết nối VinFast Connect',
      'Bảo hành xe 7 năm hoặc 160,000 km',
      'Bảo hành pin 8 năm không giới hạn km'
    ],
    colors: ['Trắng Ngà', 'Đỏ Cherry', 'Xanh Dương', 'Xám Bạc']
  },
  {
    id: 'vf-5',
    name: 'VF 5 Plus',
    category: 'SUV Cỡ A',
    price: 529000000,
    originalPrice: 558000000,
    image: vf5Image,
    description: 'VF 5 Plus là mẫu SUV điện cỡ A với thiết kế năng động, trẻ trung và trang bị công nghệ hiện đại, phù hợp cho gia đình trẻ.',
    specs: {
      range: '326 km (NEDC)',
      power: '134 mã lực (100 kW)',
      topSpeed: '140 km/h',
      battery: '37.23 kWh',
      seats: 5
    },
    features: [
      'Thiết kế SUV năng động, thể thao',
      'Hệ thống an toàn ADAS Level 2',
      'Màn hình trung tâm 10 inch',
      'Sạc pin nhanh DC',
      'Camera 360 độ',
      'Cảm biến đỗ xe thông minh'
    ],
    colors: ['Trắng', 'Đỏ', 'Xanh Dương', 'Xám', 'Đen']
  },
  {
    id: 'vf-6',
    name: 'VF 6',
    category: 'SUV Cỡ B',
    price: 675000000,
    originalPrice: null,
    image: vf6Image,
    description: 'VF 6 là mẫu crossover điện cỡ B với thiết kế coupe SUV độc đáo, trang bị công nghệ tiên tiến và không gian rộng rãi.',
    specs: {
      range: '468 km (NEDC)',
      power: '201 mã lực (150 kW)',
      topSpeed: '160 km/h',
      battery: '59.6 kWh',
      seats: 5
    },
    features: [
      'Thiết kế coupe SUV đặc trưng',
      'Hệ thống ADAS Level 2',
      'Màn hình giải trí 12.9 inch',
      'Sạc nhanh DC',
      'Hệ thống đèn LED thông minh',
      'Camera 360 độ và cảm biến đỗ xe'
    ],
    colors: ['Trắng Ngọc Trai', 'Đỏ Tía', 'Xanh Đại Dương', 'Xám Bạc', 'Đen', 'Xanh Lá']
  },
  {
    id: 'vf-7',
    name: 'VF 7',
    category: 'SUV Cỡ C',
    price: 850000000,
    originalPrice: 999000000,
    image: vf7Image,
    description: 'VF 7 là mẫu SUV điện cỡ C với thiết kế thể thao, sang trọng, trang bị công nghệ ADAS tiên tiến và hiệu suất vận hành ấn tượng.',
    specs: {
      range: '450 km (NEDC)',
      power: '201 mã lực (150 kW)',
      topSpeed: '180 km/h',
      battery: '75.3 kWh',
      seats: 5
    },
    features: [
      'Thiết kế SUV thể thao, sang trọng',
      'Hệ thống ADAS Level 2+',
      'Màn hình giải trí 12.9 inch',
      'Sạc nhanh DC 110 kW',
      'Hệ thống âm thanh cao cấp 8 loa',
      'Cửa sổ trời toàn cảnh Panorama'
    ],
    colors: ['Trắng Ngọc Trai', 'Đỏ Ruby', 'Xanh Đại Dương', 'Xám Bạc', 'Đen', 'Xanh Lá']
  },
  {
    id: 'vf-8',
    name: 'VF 8',
    category: 'SUV Cỡ D',
    price: 999000000,
    originalPrice: 1200000000,
    image: vf8Image,
    description: 'VF 8 thế hệ mới là mẫu SUV điện cao cấp cỡ D với kiến trúc phần mềm định hình, mang đến trải nghiệm lái xe mượt mà, êm ái và vượt trội.',
    specs: {
      range: '500 km (NEDC)',
      power: '260 mã lực (193 kW)',
      topSpeed: '200 km/h',
      battery: '60.13 kWh',
      seats: 5
    },
    features: [
      'Thiết kế SUV cao cấp, đẳng cấp',
      'Kiến trúc phần mềm định hình (SDA)',
      'Màn hình giải trí 15.6 inch',
      'Sạc nhanh DC 150 kW',
      'Hệ thống âm thanh cao cấp',
      'Cửa sổ trời toàn cảnh Panorama',
      'Ghế điều chỉnh điện tích hợp massage'
    ],
    colors: ['Trắng Ngọc Trai', 'Đỏ Ruby', 'Xanh Đại Dương', 'Xám Bạc', 'Đen', 'Bạc']
  },
  {
    id: 'vf-9',
    name: 'VF 9',
    category: 'SUV Cỡ E',
    price: 1500000000,
    originalPrice: 1650000000,
    image: vf9Image,
    description: 'VF 9 là mẫu SUV điện cao cấp cỡ E với không gian 7 chỗ rộng rãi, nội thất hạng thương gia và công nghệ đỉnh cao.',
    specs: {
      range: '518 km (NEDC)',
      power: '402 mã lực (300 kW)',
      topSpeed: '200 km/h',
      battery: '123 kWh',
      seats: 7
    },
    features: [
      'Thiết kế SUV 7 chỗ sang trọng, đẳng cấp',
      'Hệ thống ADAS Level 2++',
      'Màn hình giải trí 15.6 inch',
      'Sạc nhanh DC 150 kW',
      'Hệ thống âm thanh Bose Premium',
      'Cửa sổ trời toàn cảnh Panorama',
      'Ghế hàng 2 VIP với chức năng massage',
      'Hệ thống treo khí nén thích ứng'
    ],
    colors: ['Trắng Ngọc Trai', 'Đỏ Ruby', 'Xanh Đại Dương', 'Xám Bạc', 'Đen', 'Bạc']
  }
];
