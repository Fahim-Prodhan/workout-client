import { useState, useEffect, useCallback } from 'react';
import { getBanglaDate } from './data';
import * as api from './api';
import Toast, { useToast } from './components/Toast';
import DashboardPage from './pages/DashboardPage';
import WorkoutPage from './pages/WorkoutPage';
import MealPage from './pages/MealPage';
import WaterPage from './pages/WaterPage';
import ProgressPage from './pages/ProgressPage';
import RulesPage from './pages/RulesPage';

const TABS = [
  { id: 'dashboard', label: '📊 Dashboard' },
  { id: 'workout', label: '💪 Workout' },
  { id: 'meal', label: '🍽️ খাবার' },
  { id: 'water', label: '💧 পানি' },
  { id: 'progress', label: '📈 Progress' },
  { id: 'rules', label: '✅ নিয়ম' },
];

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const { toast, showToast } = useToast();

  // State
  const [waterCount, setWaterCount] = useState(0);
  const [streakDates, setStreakDates] = useState([]);
  const [completedKeys, setCompletedKeys] = useState([]);
  const [weights, setWeights] = useState([]);
  const [latestWeight, setLatestWeight] = useState(null);
  const [workoutCompleted, setWorkoutCompleted] = useState(false);
  const [profile, setProfile] = useState({ startWeight: 54, targetWeight: 58 });

  // Load initial data from API
  const loadDashboard = useCallback(async () => {
    try {
      const data = await api.getDashboard();
      setWaterCount(data.water.count);
      setStreakDates(data.streak.dates);
      setWorkoutCompleted(data.workout.completed);
      setCompletedKeys(data.completedKeys || []);
      setLatestWeight(data.weight);
      if (data.profile) setProfile(data.profile);
    } catch (err) {
      console.error('Failed to load dashboard:', err);
      showToast('⚠️ সার্ভার থেকে ডাটা লোড হয়নি', true);
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  // Load weights separately for the progress page
  const loadWeights = useCallback(async () => {
    try {
      const data = await api.getWeights();
      setWeights(data);
      if (data.length > 0) setLatestWeight(data[data.length - 1].weight);
    } catch (err) {
      console.error('Failed to load weights:', err);
    }
  }, []);

  useEffect(() => {
    loadWeights();
  }, [loadWeights]);

  // === HANDLERS ===

  const handleToggleWater = async (i) => {
    const newCount = i < waterCount ? i : i + 1;
    setWaterCount(newCount);
    try {
      await api.updateWater(newCount);
      if (newCount === 12) showToast('🎉 পানির লক্ষ্য পূরণ হয়েছে!');
    } catch (err) {
      showToast('⚠️ পানি সেভ হয়নি', true);
    }
  };

  const handleToggleStreak = async (dateKey) => {
    // Optimistic update
    const wasIncluded = streakDates.includes(dateKey);
    if (wasIncluded) {
      setStreakDates((prev) => prev.filter((s) => s !== dateKey));
    } else {
      setStreakDates((prev) => [...prev, dateKey]);
      showToast('✅ আজকের workout mark হয়েছে!');
    }

    try {
      const updated = await api.toggleStreak(dateKey);
      setStreakDates(updated);
    } catch (err) {
      // Revert
      setStreakDates((prev) =>
        wasIncluded ? [...prev, dateKey] : prev.filter((s) => s !== dateKey)
      );
      showToast('⚠️ Streak সেভ হয়নি', true);
    }
  };

  const handleMarkDone = async (dayIdx) => {
    const key = new Date().toDateString() + dayIdx;
    if (completedKeys.includes(key)) return;

    setCompletedKeys((prev) => [...prev, key]);
    setWorkoutCompleted(true);

    try {
      const updated = await api.markCompleted(key);
      setCompletedKeys(updated);
      showToast('দারুণ! Workout সম্পন্ন 💪');

      // Also mark streak for today
      const todayKey = new Date().toDateString();
      if (!streakDates.includes(todayKey)) {
        const updatedStreak = await api.toggleStreak(todayKey);
        setStreakDates(updatedStreak);
      }
    } catch (err) {
      showToast('⚠️ সেভ হয়নি', true);
    }
  };

  const handleAddWeight = async (weight, date) => {
    try {
      const data = await api.addWeight(weight, date);
      setWeights(data.logs);
      if (data.logs.length > 0) setLatestWeight(data.logs[data.logs.length - 1].weight);
      showToast('Weight যোগ হয়েছে!');
    } catch (err) {
      showToast('⚠️ Weight সেভ হয়নি', true);
    }
  };

  const handleDeleteWeight = async (id) => {
    try {
      const data = await api.deleteWeight(id);
      setWeights(data.logs);
      if (data.logs.length > 0) {
        setLatestWeight(data.logs[data.logs.length - 1].weight);
      } else {
        setLatestWeight(null);
      }
      showToast('Weight মুছে ফেলা হয়েছে');
    } catch (err) {
      showToast('⚠️ ডিলিট হয়নি', true);
    }
  };

  // === RENDER ===

  if (loading) {
    return (
      <>
        <header className="app-header">
          <div className="logo">
            Fit<span>BD</span>
          </div>
          <div className="date-badge">লোড হচ্ছে...</div>
        </header>
        <div className="loading-screen">
          <div className="loading-spinner" />
          <div className="loading-text">ডাটা লোড হচ্ছে...</div>
        </div>
      </>
    );
  }

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <DashboardPage
            waterCount={waterCount}
            streakDates={streakDates}
            workoutCompleted={workoutCompleted}
            latestWeight={latestWeight}
            completedKeys={completedKeys}
            onToggleStreak={handleToggleStreak}
            showToast={showToast}
          />
        );
      case 'workout':
        return (
          <WorkoutPage
            completedKeys={completedKeys}
            onMarkDone={handleMarkDone}
            showToast={showToast}
          />
        );
      case 'meal':
        return <MealPage />;
      case 'water':
        return (
          <WaterPage
            waterCount={waterCount}
            onToggleWater={handleToggleWater}
            showToast={showToast}
          />
        );
      case 'progress':
        return (
          <ProgressPage
            weights={weights}
            profile={profile}
            onAddWeight={handleAddWeight}
            onDeleteWeight={handleDeleteWeight}
            showToast={showToast}
          />
        );
      case 'rules':
        return <RulesPage />;
      default:
        return null;
    }
  };

  return (
    <>
      <header className="app-header">
        <div className="logo">
          Fit<span>BD</span>
        </div>
        <div className="date-badge">{getBanglaDate()}</div>
      </header>

      <div className="nav-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`nav-tab ${activePage === tab.id ? 'active' : ''}`}
            onClick={() => setActivePage(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <main className="app-main">{renderPage()}</main>

      <Toast message={toast.message} visible={toast.visible} warn={toast.warn} />
    </>
  );
}
