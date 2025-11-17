import React, { useState, useEffect } from 'react';
import { getProjects, getClients, getImageUrl } from '../api/apiService';

const LandingPage = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const projectsRes = await getProjects();
        setProjects(projectsRes.data);

        const clientsRes = await getClients();
        setClients(clientsRes.data);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
  }, []);

  return (
    <div style={{padding:20}}>
      <h1>Welcome to Amit Portfolio</h1>
      <section>
        <h2>Projects</h2>
        <ul>
          {projects.map(p => (
            <li key={p.id}>
              <strong>{p.name}</strong><br/>
              {p.description}<br/>
              {p.imageFilename && <img src={getImageUrl(p.imageFilename)} alt={p.name} width="180" />}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Clients</h2>
        <ul>
          {clients.map(c => (
            <li key={c.id}>
              <strong>{c.name}</strong> - {c.designation}<br/>
              {c.description}<br/>
              {c.imageFilename && <img src={getImageUrl(c.imageFilename)} alt={c.name} width="120" />}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default LandingPage;
