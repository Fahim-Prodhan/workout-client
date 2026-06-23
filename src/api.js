const API_BASE = 'https://workout-zeta-wine.vercel.app/api';

async function request(path, options = {}) {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: 'Request failed' }));
      throw new Error(err.error || 'Request failed');
    }
    return res.json();
  } catch (err) {
    console.error(`API Error [${path}]:`, err);
    throw err;
  }
}

// Dashboard
export const getDashboard = () => request('/dashboard');

// Water
export const getWaterToday = () => request('/water/today');
export const updateWater = (count) =>
  request('/water/today', { method: 'PUT', body: JSON.stringify({ count }) });

// Weight
export const getWeights = () => request('/weight');
export const addWeight = (weight, date) =>
  request('/weight', { method: 'POST', body: JSON.stringify({ weight, date }) });
export const deleteWeight = (id) =>
  request(`/weight/${id}`, { method: 'DELETE' });

// Streak
export const getStreak = () => request('/streak');
export const toggleStreak = (date) =>
  request('/streak/toggle', { method: 'POST', body: JSON.stringify({ date }) });

// Completed Workouts
export const getCompleted = () => request('/completed');
export const markCompleted = (key) =>
  request('/completed', { method: 'POST', body: JSON.stringify({ key }) });

// Profile
export const getProfile = () => request('/profile');
export const updateProfile = (data) =>
  request('/profile', { method: 'PUT', body: JSON.stringify(data) });
