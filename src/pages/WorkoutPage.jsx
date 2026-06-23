import { useState } from 'react';
import { WORKOUTS } from '../data';

export default function WorkoutPage({ completedKeys, onMarkDone, showToast }) {
  const [openDays, setOpenDays] = useState({});
  const todayKey = new Date().toDateString();

  const toggleDay = (i) => {
    setOpenDays((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <div className="fade-in">
      <p className="section-title">সাপ্তাহিক Workout Plan</p>
      {WORKOUTS.map((w, i) => {
        const isOpen = openDays[i];
        const isDone = completedKeys.includes(todayKey + i);

        return (
          <div className="workout-day" key={i}>
            <div className="workout-day-header" onClick={() => toggleDay(i)}>
              <div className="day-left">
                <div className="day-num" style={{ color: w.color }}>
                  {i + 1}
                </div>
                <div>
                  <div className="day-name">{w.day}</div>
                  <div className="day-focus">{w.focus}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className={`day-tag ${w.tag}`}>{w.tagLabel}</span>
                <span className={`chevron ${isOpen ? 'open' : ''}`}>›</span>
              </div>
            </div>
            <div className={`exercise-list ${isOpen ? 'open' : ''}`}>
              {w.exercises.map((e, j) => (
                <div className="exercise-item" key={j}>
                  <span className="ex-name">{e.name}</span>
                  <span className="ex-sets">{e.sets}</span>
                </div>
              ))}
              <button
                className={`done-btn ${isDone ? 'completed' : ''}`}
                onClick={() => !isDone && onMarkDone(i)}
              >
                {isDone ? '✅ সম্পন্ন হয়েছে' : '✅ সম্পন্ন করেছি'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
