import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div style={{display:'flex',minHeight:'100vh'}}>
      <nav style={{width:220,background:'#f4f4f4',padding:20}}>
        <h3>Admin</h3>
        <ul>
          <li><Link to="/admin">Dashboard</Link></li>
          <li><Link to="/admin/projects">Manage Projects</Link></li>
          <li><Link to="/admin/clients">Manage Clients</Link></li>
        </ul>
      </nav>
      <main style={{flex:1,padding:20}}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
