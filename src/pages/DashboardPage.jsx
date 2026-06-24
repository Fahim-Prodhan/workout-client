import { QUOTES, WORKOUTS, DAYS_BN, getTodayWorkoutIndex } from '../data';

export default function DashboardPage({
  waterCount,
  streakDates,
  workoutCompleted,
  latestWeight,
  completedKeys,
  onToggleStreak,
  showToast,
}) {
  const quote = QUOTES[new Date().getDay() % QUOTES.length];
  const todayIdx = getTodayWorkoutIndex();
  const todayWorkout = WORKOUTS[todayIdx];
  const todayKey = new Date().toDateString();

  // Build last 7 days for streak display
  const last7Days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    last7Days.push(d);
  }

  const waterPct = Math.min((waterCount / 12) * 100, 100);
  const workoutDone = workoutCompleted || completedKeys.some((k) => k.startsWith(todayKey));

  return (
    <div className="fade-in">
      {/* Motivation */}
      <div className="motivation-card">
        <div className="motivation-quote">{quote.q}</div>
        <div className="motivation-author">{quote.a}</div>
      </div>

      {/* Summary Cards */}
      <p className="section-title">আজকের Summary</p>
      <div className="cards-grid">
        <div className="card">
          <div className="card-icon">🏋️</div>
          <div className="card-label">Workout</div>
          <div className="card-value" style={{ color: 'var(--accent)' }}>
            {workoutDone ? 'Done ✅' : 'বাকি'}
          </div>
          <div className="card-sub">আজকের দিন</div>
          <div className="progress-wrap">
            <div className="progress-bar">
              <div className="progress-fill fill-green" style={{ width: workoutDone ? '100%' : '0%' }} />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-icon">💧</div>
          <div className="card-label">পানি পান</div>
          <div className="card-value" style={{ color: 'var(--accent2)' }}>
            {(waterCount * 0.25).toFixed(2)}L
          </div>
          <div className="card-sub">লক্ষ্য: ৩ লিটার</div>
          <div className="progress-wrap">
            <div className="progress-bar">
              <div className="progress-fill fill-blue" style={{ width: `${waterPct}%` }} />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-icon">🔥</div>
          <div className="card-label">Streak</div>
          <div className="card-value" style={{ color: 'var(--accent3)' }}>
            {streakDates.length}
          </div>
          <div className="card-sub">দিন continuous</div>
        </div>

        <div className="card">
          <div className="card-icon">⚖️</div>
          <div className="card-label">Weight</div>
          <div className="card-value" style={{ color: 'var(--purple)' }}>
            {latestWeight || '—'}
          </div>
          <div className="card-sub">কেজি (শেষ রেকর্ড)</div>
        </div>
      </div>

      {/* Weekly Streak */}
      <p className="section-title">এই সপ্তাহের Streak</p>
      <div className="card" style={{ marginBottom: '24px' }}>
        <div className="streak-row">
          {last7Days.map((d, i) => {
            const key = d.toDateString();
            const done = streakDates.includes(key);
            const jsDay = d.getDay(); // 0=Sun
            const bnIdx = jsDay === 6 ? 0 : jsDay + 1;
            return (
              <div
                key={i}
                className={`streak-day ${done ? 'done' : ''}`}
                onClick={() => onToggleStreak(key)}
                title={key}
              >
                {DAYS_BN[bnIdx]}
              </div>
            );
          })}
        </div>
        <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: "var(--font-bn)" }}>
          ক্লিক করে আজকের workout mark করো ✓
        </div>
      </div>

      {/* Today's Workout */}
      <p className="section-title">আজকের Workout</p>
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span className={`day-tag ${todayWorkout.tag}`} style={{ fontSize: '13px', padding: '6px 14px' }}>
            {todayWorkout.tagLabel}
          </span>
          <div>
            <div style={{ fontWeight: 600, fontFamily: "var(--font-bn)" }}>{todayWorkout.day}</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: "var(--font-bn)" }}>
              {todayWorkout.focus}
            </div>
          </div>
        </div>
        {todayWorkout.exercises.map((e, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px 0',
              borderBottom: i < todayWorkout.exercises.length - 1 ? '1px solid var(--border)' : 'none',
              fontFamily: "var(--font-bn)",
              fontSize: '14px',
            }}
          >
            <span>{e.name}</span>
            <span className="ex-sets">{e.sets}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
