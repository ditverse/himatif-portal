import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import PublicLayout from './components/layout/PublicLayout';
import AdminLayout from './components/layout/AdminLayout';

// Public Pages
import LandingPage from './pages/public/LandingPage';
import CabinetOverview from './pages/public/CabinetOverview';
import DepartmentsList from './pages/public/DepartmentsList';
import DepartmentDetail from './pages/public/DepartmentDetail';
import BlogArchive from './pages/public/BlogArchive';
import BlogDetail from './pages/public/BlogDetail';
import Timeline from './pages/public/Timeline';
import ContactUs from './pages/public/ContactUs';
import AspirasiSubmission from './pages/public/AspirasiSubmission';

// Admin Pages
import DashboardOverview from './pages/admin/DashboardOverview';
import BlogManagement from './pages/admin/BlogManagement';
import BlogEditor from './pages/admin/BlogEditor';
import CabinetManagement from './pages/admin/CabinetManagement';
import DepartmentManagement from './pages/admin/DepartmentManagement';
import AspirasiInbox from './pages/admin/AspirasiInbox';
import TimelineManagement from './pages/admin/TimelineManagement';
import KepangkatanReview from './pages/admin/KepangkatanReview';
import SettingsManagement from './pages/admin/SettingsManagement';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="cabinet" element={<CabinetOverview />} />
          <Route path="departments" element={<DepartmentsList />} />
          <Route path="departments/:id" element={<DepartmentDetail />} />
          <Route path="blog" element={<BlogArchive />} />
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="aspirasi" element={<AspirasiSubmission />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="blog" element={<BlogManagement />} />
          <Route path="blog/edit" element={<BlogEditor />} />
          <Route path="cabinet" element={<CabinetManagement />} />
          <Route path="departments" element={<DepartmentManagement />} />
          <Route path="aspirasi" element={<AspirasiInbox />} />
          <Route path="timeline" element={<TimelineManagement />} />
          <Route path="kepangkatan" element={<KepangkatanReview />} />
          <Route path="settings" element={<SettingsManagement />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
