import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CarsPage from './pages/CarsPage';
import CarDetailPage from './pages/CarDetailPage';
import TechnologyPage from './pages/TechnologyPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PromotionsPage from './pages/PromotionsPage';
import PromotionDetailPage from './pages/PromotionDetailPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import TestDrivePage from './pages/TestDrivePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/xe" element={<CarsPage />} />
            <Route path="/xe/:id" element={<CarDetailPage />} />
            <Route path="/cong-nghe" element={<TechnologyPage />} />
            <Route path="/dich-vu" element={<ServicesPage />} />
            <Route path="/dich-vu/:id" element={<ServiceDetailPage />} />
            <Route path="/uu-dai" element={<PromotionsPage />} />
            <Route path="/uu-dai/:id" element={<PromotionDetailPage />} />
            <Route path="/tin-tuc" element={<NewsPage />} />
            <Route path="/tin-tuc/:id" element={<NewsDetailPage />} />
            <Route path="/dat-lai-thu" element={<TestDrivePage />} />
            <Route path="/ve-vinfast" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
