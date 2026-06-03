import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { chargingStationsData, cities } from '../data/chargingStationsData';

// Fix leaflet default icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Custom marker dùng Google Material Icons (font-based)
const fastIcon = new L.DivIcon({
  className: '',
  html: `
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <div style="
      background: linear-gradient(135deg, #1d4ed8, #3b82f6);
      width: 38px; height: 38px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 3px solid white;
      box-shadow: 0 4px 14px rgba(29,78,216,0.45);
      display: flex; align-items: center; justify-content: center;
    ">
      <span class="material-icons" style="transform:rotate(45deg);font-size:18px;color:white;line-height:1;">bolt</span>
    </div>`,
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -42],
});

const normalIcon = new L.DivIcon({
  className: '',
  html: `
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <div style="
      background: linear-gradient(135deg, #16a34a, #22c55e);
      width: 34px; height: 34px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 3px solid white;
      box-shadow: 0 4px 14px rgba(22,163,74,0.45);
      display: flex; align-items: center; justify-content: center;
    ">
      <span class="material-icons" style="transform:rotate(45deg);font-size:16px;color:white;line-height:1;">battery_charging_full</span>
    </div>`,
  iconSize: [34, 34],
  iconAnchor: [17, 34],
  popupAnchor: [0, -38],
});

const MapFlyTo = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (center) map.flyTo(center, zoom, { duration: 1.2 });
  }, [center, zoom, map]);
  return null;
};

const cityCoords = {
  'Tất cả': { center: [16.047079, 108.20623], zoom: 6 },
  'Hà Nội': { center: [21.0285, 105.8542], zoom: 12 },
  'TP. Hồ Chí Minh': { center: [10.8231, 106.6297], zoom: 11 },
  'Đà Nẵng': { center: [16.0544, 108.2022], zoom: 12 },
  'Hải Phòng': { center: [20.8449, 106.6881], zoom: 12 },
  'Cần Thơ': { center: [10.0452, 105.7469], zoom: 12 },
  'Nha Trang': { center: [12.2388, 109.1967], zoom: 12 },
  'Hạ Long': { center: [20.9612, 107.0473], zoom: 12 },
  'Phú Quốc': { center: [10.2899, 103.9840], zoom: 11 },
  'Vinh': { center: [18.6800, 105.6827], zoom: 12 },
  'Huế': { center: [16.4637, 107.5909], zoom: 12 },
};

const ChargingStationMap = () => {
  const [selectedCity, setSelectedCity] = useState('Tất cả');
  const [searchText, setSearchText] = useState('');
  const [selectedStation, setSelectedStation] = useState(null);
  const [mapCenter, setMapCenter] = useState([16.047079, 108.20623]);
  const [mapZoom, setMapZoom] = useState(6);

  const handleCityChange = (city) => {
    setSelectedCity(city);
    const c = cityCoords[city] || cityCoords['Tất cả'];
    setMapCenter(c.center);
    setMapZoom(c.zoom);
  };

  const filtered = chargingStationsData.filter(s => {
    const matchCity = selectedCity === 'Tất cả' || s.city === selectedCity;
    const matchSearch = s.name.toLowerCase().includes(searchText.toLowerCase()) ||
      s.address.toLowerCase().includes(searchText.toLowerCase());
    return matchCity && matchSearch;
  });

  // eslint-disable-next-line no-unused-vars
  const fastCount = filtered.filter(s => s.type === 'fast').length;
  // eslint-disable-next-line no-unused-vars
  const normalCount = filtered.filter(s => s.type === 'normal').length;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Tìm Trạm Sạc VinFast</h2>
          <p className="text-gray-600">
            Hơn <span className="text-blue-600 font-bold">200+</span> trạm sạc phủ khắp toàn quốc -
            sạc nhanh DC lên đến <span className="text-blue-600 font-bold">120 kW</span>
          </p>
        </div>



        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-3 mb-6 max-w-3xl mx-auto">
          <div className="relative flex-1">
            <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" style={{ fontSize: 20 }}>search</span>
            <input
              type="text"
              placeholder="Tìm theo tên hoặc địa chỉ..."
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition shadow-sm"
            />
          </div>
          <div className="relative">
            <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" style={{ fontSize: 18 }}>location_city</span>
            <select
              value={selectedCity}
              onChange={e => handleCityChange(e.target.value)}
              className="pl-10 pr-8 py-3 bg-white border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition cursor-pointer shadow-sm min-w-[200px] appearance-none"
            >
              <option value="Tất cả">Tất cả tỉnh thành</option>
              {cities.map(city => <option key={city} value={city}>{city}</option>)}
            </select>
            <span className="material-icons absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" style={{ fontSize: 18 }}>expand_more</span>
          </div>
        </div>

        {/* Map + List */}
        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">

          {/* Map */}
          <div className="flex-1 rounded-2xl overflow-hidden border border-gray-200 shadow-lg" style={{ height: 520 }}>
            <MapContainer center={[16.047079, 108.20623]} zoom={6} style={{ height: '100%', width: '100%' }}>
              <MapFlyTo center={mapCenter} zoom={mapZoom} />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />
              {filtered.map(station => (
                <Marker
                  key={station.id}
                  position={[station.lat, station.lng]}
                  icon={station.type === 'fast' ? fastIcon : normalIcon}
                  eventHandlers={{ click: () => setSelectedStation(station) }}
                >
                  <Popup>
                    <div style={{ minWidth: 230, fontFamily: 'sans-serif' }}>
                      <div style={{
                        background: station.type === 'fast'
                          ? 'linear-gradient(135deg,#1d4ed8,#3b82f6)'
                          : 'linear-gradient(135deg,#16a34a,#22c55e)',
                        color: 'white', padding: '8px 12px',
                        margin: '-10px -10px 10px',
                        borderRadius: '4px 4px 0 0',
                        fontSize: 13, fontWeight: 700,
                        display: 'flex', alignItems: 'center', gap: 6,
                      }}>
                        <span className="material-icons" style={{ fontSize: 16 }}>
                          {station.type === 'fast' ? 'bolt' : 'battery_charging_full'}
                        </span>
                        {station.type === 'fast' ? 'Sạc nhanh DC' : 'Sạc thường AC'} — {station.power}
                      </div>
                      <strong style={{ fontSize: 14, color: '#1e293b', lineHeight: 1.4, display: 'block', marginBottom: 6 }}>
                        {station.name}
                      </strong>
                      <p style={{ color: '#64748b', fontSize: 12, margin: '4px 0', display: 'flex', gap: 4 }}>
                        <span className="material-icons" style={{ fontSize: 13, marginTop: 1 }}>location_on</span>{station.address}
                      </p>
                      <p style={{ color: '#64748b', fontSize: 12, margin: '4px 0', display: 'flex', gap: 4 }}>
                        <span className="material-icons" style={{ fontSize: 13, marginTop: 1 }}>power</span>
                        {station.connectors} trụ — còn trống: <strong style={{ color: '#16a34a', marginLeft: 3 }}>{station.available}</strong>
                      </p>
                      <p style={{ color: '#64748b', fontSize: 12, margin: '4px 0', display: 'flex', gap: 4 }}>
                        <span className="material-icons" style={{ fontSize: 13, marginTop: 1 }}>schedule</span>{station.hours}
                      </p>
                      <p style={{ color: '#64748b', fontSize: 12, margin: '4px 0', display: 'flex', gap: 4 }}>
                        <span className="material-icons" style={{ fontSize: 13, marginTop: 1 }}>call</span>{station.phone}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Station List */}
          <div className="lg:w-80 flex flex-col gap-2 overflow-y-auto pr-1" style={{ maxHeight: 520 }}>
            {filtered.length === 0 ? (
              <div className="text-center text-gray-400 py-16">
                <span className="material-icons" style={{ fontSize: 48, opacity: 0.3 }}>ev_station</span>
                <p className="mt-3 text-sm">Không tìm thấy trạm sạc</p>
              </div>
            ) : (
              filtered.map(station => (
                <div
                  key={station.id}
                  onClick={() => {
                    setSelectedStation(station);
                    setMapCenter([station.lat, station.lng]);
                    setMapZoom(15);
                  }}
                  className={`cursor-pointer rounded-xl p-4 border transition-all duration-200 ${selectedStation?.id === station.id
                    ? 'bg-blue-50 border-blue-400 shadow-md'
                    : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm'
                    }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-gray-900 text-sm font-semibold leading-snug flex-1">{station.name}</h4>
                    <span className={`flex-shrink-0 text-xs px-2 py-0.5 rounded-full font-bold flex items-center gap-1 ${station.type === 'fast'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-green-100 text-green-700'
                      }`}>
                      <span className="material-icons" style={{ fontSize: 12 }}>
                        {station.type === 'fast' ? 'bolt' : 'battery_charging_full'}
                      </span>
                      {station.type === 'fast' ? 'DC' : 'AC'}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs mb-2 flex items-start gap-1">
                    <span className="material-icons" style={{ fontSize: 13, marginTop: 1, flexShrink: 0 }}>location_on</span>
                    {station.address}
                  </p>
                  <div className="flex items-center justify-between text-xs gap-1">
                    <span className="text-gray-500 flex items-center gap-1">
                      <span className="material-icons" style={{ fontSize: 12 }}>bolt</span>{station.power}
                    </span>
                    <span className="text-gray-500 flex items-center gap-1">
                      <span className="material-icons" style={{ fontSize: 12 }}>power</span>
                      {station.available}/{station.connectors}
                    </span>
                    <span className={`font-bold flex items-center gap-0.5 ${station.available > 0 ? 'text-green-600' : 'text-red-500'}`}>
                      <span className="material-icons" style={{ fontSize: 10 }}>circle</span>
                      {station.available > 0 ? 'Sẵn sàng' : 'Đầy'}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-8 mt-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-500 shadow-sm"></div>
            <span>Sạc nhanh DC (lên đến 120 kW)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500 shadow-sm"></div>
            <span>Sạc thường AC (22 kW)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChargingStationMap;
