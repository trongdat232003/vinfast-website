# VinFast Website - ReactJS

Website bán xe điện VinFast được xây dựng bằng ReactJS, Tailwind CSS và Material-UI.

## 🚀 Tính năng

- ✅ Responsive design với Tailwind CSS
- ✅ Material-UI Icons
- ✅ React Router cho navigation
- ✅ 12 trang đầy đủ chức năng
- ✅ Header trong suốt overlay trên banner
- ✅ Dữ liệu xe, tin tức, dịch vụ, ưu đãi

## 📁 Cấu trúc thư mục

```
vinfast-website/
├── public/
│   ├── assets/
│   │   └── backgroud/          # Đặt ảnh bg_1.png vào đây
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header với logo trái, menu giữa, actions phải
│   │   └── Footer.jsx          # Footer đầy đủ thông tin
│   ├── pages/
│   │   ├── HomePage.jsx        # Trang chủ với banner overlay
│   │   ├── CarsPage.jsx        # Danh sách xe với filter
│   │   ├── CarDetailPage.jsx   # Chi tiết xe với tabs
│   │   ├── TechnologyPage.jsx  # Công nghệ VinFast
│   │   ├── ServicesPage.jsx    # Danh sách dịch vụ
│   │   ├── ServiceDetailPage.jsx
│   │   ├── PromotionsPage.jsx  # Ưu đãi
│   │   ├── PromotionDetailPage.jsx
│   │   ├── NewsPage.jsx        # Tin tức với filter
│   │   ├── NewsDetailPage.jsx
│   │   ├── TestDrivePage.jsx   # Form đặt lái thử
│   │   └── AboutPage.jsx       # Về VinFast
│   ├── data/
│   │   ├── carsData.js         # 10 mẫu xe
│   │   ├── newsData.js         # 6 tin tức
│   │   ├── servicesData.js     # 6 dịch vụ
│   │   └── promotionsData.js   # 6 ưu đãi
│   ├── App.js
│   ├── index.js
│   └── index.css               # Tailwind directives
├── tailwind.config.js          # important: true để override MUI
├── postcss.config.js
└── package.json
```

## 🎨 Thiết kế

- **Font**: Roboto
- **Header**: 
  - Logo bên trái
  - Menu ở giữa (Xe, Công nghệ, Dịch vụ, Ưu đãi, Tin tức, Về VinFast)
  - Nút tìm kiếm và "ĐẶT LÁI THỬ" bên phải
  - Transparent khi ở homepage, solid khi scroll
  - KHÔNG có nút đăng nhập
- **Banner**: Header và title overlay trên background image
- **Features Bar**: Overlap banner -60px từ trên xuống

## 🛠️ Cài đặt và chạy

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm start

# Build production
npm run build
```

## 📝 Lưu ý

1. **Background Image**: Đặt ảnh `bg_1.png` vào thư mục `public/assets/backgroud/` (lưu ý typo "backgroud" không phải "background")

2. **Dữ liệu**: Tất cả dữ liệu được lưu trong `src/data/`
   - 10 mẫu xe VinFast (VF 3, VF 5, VF 6, VF 7, VF 8, VF 9, VF e34, VF Wild, VF 32, VF DragonFly)
   - 6 tin tức
   - 6 dịch vụ
   - 6 ưu đãi

3. **Routes**:
   - `/` - Trang chủ
   - `/xe` - Danh sách xe
   - `/xe/:id` - Chi tiết xe
   - `/cong-nghe` - Công nghệ
   - `/dich-vu` - Dịch vụ
   - `/dich-vu/:id` - Chi tiết dịch vụ
   - `/uu-dai` - Ưu đãi
   - `/uu-dai/:id` - Chi tiết ưu đãi
   - `/tin-tuc` - Tin tức
   - `/tin-tuc/:id` - Chi tiết tin tức
   - `/dat-lai-thu` - Đặt lái thử
   - `/ve-vinfast` - Về VinFast

4. **Icons**: Sử dụng Material-UI Icons (@mui/icons-material)

5. **Styling**: 
   - Tailwind CSS với `important: true` trong config để override MUI
   - Font Roboto được load từ Google Fonts trong index.html

## 🌐 Server đang chạy

Server development đang chạy tại: http://localhost:3000

## 📦 Dependencies chính

- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.20.0
- @mui/material: ^5.14.19
- @mui/icons-material: ^5.14.19
- tailwindcss: ^3.3.6

## 🚗 Dữ liệu xe thực tế

Tất cả thông tin xe được cập nhật từ trang VinFast chính thức (tháng 6/2026):

### VF 3 - Mini SUV
- **Giá**: 302 triệu VNĐ (giảm từ 320 triệu)
- **Pin**: 18.64 kWh
- **Phạm vi**: 210 km
- **Công suất**: 43 mã lực

### VF 5 Plus - SUV Cỡ A
- **Giá**: 529 triệu VNĐ (giảm từ 558 triệu)
- **Pin**: 37.23 kWh
- **Phạm vi**: 326 km
- **Công suất**: 134 mã lực

### VF 6 - SUV Cỡ B
- **Giá**: 675 triệu VNĐ
- **Pin**: 59.6 kWh
- **Phạm vi**: 468 km
- **Công suất**: 201 mã lực

### VF 7 - SUV Cỡ C
- **Giá**: 850 triệu VNĐ (giảm từ 999 triệu)
- **Pin**: 75.3 kWh
- **Phạm vi**: 450 km
- **Công suất**: 201 mã lực

### VF 8 - SUV Cỡ D (Thế hệ mới)
- **Giá**: 999 triệu VNĐ (giảm từ 1.2 tỷ)
- **Pin**: 60.13 kWh
- **Phạm vi**: 500 km
- **Công suất**: 260 mã lực
- **Đặc biệt**: Kiến trúc phần mềm định hình (SDA)

### VF 9 - SUV Cỡ E
- **Giá**: 1.5 tỷ VNĐ (giảm từ 1.65 tỷ)
- **Pin**: 123 kWh
- **Phạm vi**: 518 km
- **Công suất**: 402 mã lực
- **Chỗ ngồi**: 7 chỗ

**Nguồn ảnh**: Tất cả ảnh xe được sử dụng từ `src/assets/car/`

## 🎯 Tính năng nổi bật

1. **Header thông minh**: Transparent trên homepage, solid trên các trang khác và khi scroll
2. **Responsive**: Hoàn toàn responsive trên mọi thiết bị
3. **Filter**: Lọc xe theo loại, tin tức theo category
4. **Tabs**: Chi tiết xe có tabs (Tính năng, Thông số, Màu sắc)
5. **Form**: Form đặt lái thử đầy đủ với validation
6. **Timeline**: Hành trình phát triển VinFast
7. **CTA**: Call-to-action buttons ở mọi trang quan trọng

## 📞 Hỗ trợ

Hotline: 1900 23 23 89
Email: support@vinfastauto.com
