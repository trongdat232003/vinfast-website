import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { carsData } from '../data/carsData';

const CarsPage = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'sedan', name: 'Sedan' },
    { id: 'suv', name: 'SUV' },
    { id: 'mini', name: 'Mini' },
    { id: 'pickup', name: 'Bán tải' },
    { id: 'minivan', name: 'Minivan' }
  ];

  const filteredCars = filter === 'all' 
    ? carsData 
    : carsData.filter(car => car.category.toLowerCase().includes(filter));

  return (
    <div className="pt-[70px] min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Dòng xe VinFast</h1>
          <p className="text-xl">Khám phá các mẫu xe điện thông minh, hiện đại</p>
        </div>
      </div>

      {/* Filter */}
      <div className="bg-white shadow-md sticky top-[70px] z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  filter === cat.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <Link
              key={car.id}
              to={`/xe/${car.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition group"
            >
              <div className="overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-56 object-contain group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                <p className="text-gray-600 mb-4">{car.category}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div>
                    <div className="text-gray-500">Phạm vi</div>
                    <div className="font-semibold">{car.specs.range}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">Công suất</div>
                    <div className="font-semibold">{car.specs.power}</div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <div>
                    <div className="text-blue-600 font-bold text-xl">
                      {car.price.toLocaleString('vi-VN')} VNĐ
                    </div>
                    {car.originalPrice && (
                      <div className="text-gray-400 line-through text-sm">
                        {car.originalPrice.toLocaleString('vi-VN')} VNĐ
                      </div>
                    )}
                  </div>
                  <span className="text-blue-600 font-semibold">Chi tiết →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarsPage;
