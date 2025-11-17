import React, { useState, useEffect } from 'react';
import { getProjects, addProject, deleteProject, getImageUrl } from '../api/apiService';

const ManageProjects = () => {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const fetchProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res.data);
    } catch (error) {
      console.error('Failed to fetch projects', error);
    }
  };

  useEffect(() => { fetchProjects(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description || !image) return alert('All fields required');
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', image);
    await addProject(formData);
    setName(''); setDescription(''); setImage(null);
    fetchProjects();
  };

  return (
    <div>
      <h2>Manage Projects</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} /><br/>
        <textarea placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)}></textarea><br/>
        <input type="file" onChange={e=>setImage(e.target.files[0])} /><br/>
        <button type="submit">Add</button>
      </form>

      <ul>
        {projects.map(p => (
          <li key={p.id}>
            <strong>{p.name}</strong> - {p.description}
            {p.imageFilename && <div><img src={getImageUrl(p.imageFilename)} alt={p.name} width="160" /></div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageProjects;
