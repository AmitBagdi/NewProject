import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LandingPage from './pages/LandingPage';
import AdminLayout from './admin/AdminLayout';
import Dashboard from './admin/Dashboard';
import ManageProjects from './admin/ManageProjects';
import ManageClients from './admin/ManageClients';
import ViewContacts from './admin/ViewContacts';
import ViewSubscribers from './admin/ViewSubscribers';

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<ManageProjects />} />
          <Route path="clients" element={<ManageClients />} />
          <Route path="contacts" element={<ViewContacts />} />
          <Route path="subscribers" element={<ViewSubscribers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
