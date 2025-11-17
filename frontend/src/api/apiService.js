import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getImageUrl = (filename) => {
  return `${import.meta.env.VITE_API_BASE_URL}/uploads/${filename}`;
};

export const getProjects = () => apiClient.get('/api/projects');
export const addProject = (formData) => {
  return apiClient.post('/api/projects', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
export const deleteProject = (id) => apiClient.delete(`/api/projects/${id}`);

export const getClients = () => apiClient.get('/api/clients');
export const addClient = (formData) => {
  return apiClient.post('/api/clients', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
export const deleteClient = (id) => apiClient.delete(`/api/clients/${id}`);

export const getContacts = () => apiClient.get('/api/contacts');
export const addContact = (contactData) => {
  return apiClient.post('/api/contacts', contactData);
};

export const getSubscribers = () => apiClient.get('/api/subscribers');
export const addSubscriber = (subscriberData) => {
  return apiClient.post('/api/subscribers', subscriberData);
};
