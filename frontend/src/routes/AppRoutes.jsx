import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashboardPage from '../pages/DashboardPage';
import IssueReportPage from '../pages/IssueReportPage';
import MapPage from '../pages/MapPage';
import AssistantPage from '../pages/AssistantPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/report" element={<IssueReportPage />} />
          <Route path="/issues" element={<MapPage />} />
          <Route path="/assistant" element={<AssistantPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
