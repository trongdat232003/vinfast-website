import React, { useState } from 'react';
import { carsData } from '../data/carsData';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const TestDrivePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    carModel: '',
    date: '',
    time: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const cities = [
    'Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ',
    'Biên Hòa', 'Nha Trang', 'Huế', 'Vũng Tàu', 'Buôn Ma Thuột'
  ];

  const timeSlots = [
    '08:00 - 09:00', '09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00',
    '13:00 - 14:00', '14:00 - 15:00', '15:00 - 16:00', '16:00 - 17:00'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        carModel: '',
        date: '',
        time: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="pt-[70px] min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Đặt lịch lái thử</h1>
          <p className="text-xl">Trải nghiệm xe điện VinFast ngay hôm nay</p>
        </div>
      </div>

      {/* Form */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {submitted ? (
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-12 text-center">
            <div className="text-green-600 mb-4">
              <DirectionsCarIcon style={{ fontSize: 80 }} />
            </div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Đặt lịch thành công!
            </h2>
            <p className="text-lg text-gray-700">
              Cảm ơn bạn đã đăng ký lái thử. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Họ tên */}
                <div>
                  <label className="flex items-center text-gray-700 font-semibold mb-2">
                    <PersonIcon className="mr-2 text-blue-600" />
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nhập họ và tên"
                  />
                </div>

                {/* Số điện thoại */}
                <div>
                  <label className="flex items-center text-gray-700 font-semibold mb-2">
                    <PhoneIcon className="mr-2 text-blue-600" />
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nhập số điện thoại"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center text-gray-700 font-semibold mb-2">
                    <EmailIcon className="mr-2 text-blue-600" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nhập email"
                  />
                </div>

                {/* Thành phố */}
                <div>
                  <label className="flex items-center text-gray-700 font-semibold mb-2">
                    <LocationOnIcon className="mr-2 text-blue-600" />
                    Thành phố *
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Chọn thành phố</option>
                    {cities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                {/* Dòng xe */}
                <div>
                  <label className="flex items-center text-gray-700 font-semibold mb-2">
                    <DirectionsCarIcon className="mr-2 text-blue-600" />
                    Dòng xe muốn lái thử *
                  </label>
                  <select
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Chọn dòng xe</option>
                    {carsData.map(car => (
                      <option key={car.id} value={car.name}>{car.name}</option>
                    ))}
                  </select>
                </div>

                {/* Ngày */}
                <div>
                  <label className="flex items-center text-gray-700 font-semibold mb-2">
                    <CalendarTodayIcon className="mr-2 text-blue-600" />
                    Ngày lái thử *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Thời gian */}
                <div className="md:col-span-2">
                  <label className="text-gray-700 font-semibold mb-2 block">
                    Khung giờ *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Chọn khung giờ</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                {/* Ghi chú */}
                <div className="md:col-span-2">
                  <label className="text-gray-700 font-semibold mb-2 block">
                    Ghi chú (tùy chọn)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nhập ghi chú nếu có..."
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
                >
                  XÁC NHẬN ĐẶT LỊCH
                </button>
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                * Các trường bắt buộc
              </p>
            </form>
          </div>
        )}

        {/* Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <PhoneIcon className="text-blue-600 text-5xl mb-3 mx-auto" />
            <h3 className="font-bold mb-2">Hotline</h3>
            <p className="text-blue-600 font-semibold">1900 23 23 89</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <EmailIcon className="text-blue-600 text-5xl mb-3 mx-auto" />
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-blue-600 font-semibold">testdrive@vinfastauto.com</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <LocationOnIcon className="text-blue-600 text-5xl mb-3 mx-auto" />
            <h3 className="font-bold mb-2">Showroom</h3>
            <p className="text-gray-700">Toàn quốc</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDrivePage;
