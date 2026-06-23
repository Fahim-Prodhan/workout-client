import { useState } from 'react';
import { formatDate } from '../data';

export default function ProgressPage({ weights, profile, onAddWeight, onDeleteWeight, showToast }) {
  const [weightVal, setWeightVal] = useState('');
  const [weightDate, setWeightDate] = useState(new Date().toISOString().split('T')[0]);

  const handleAdd = () => {
    const val = parseFloat(weightVal);
    if (!val || !weightDate) {
      showToast('⚠️ Weight ও তারিখ দাও', true);
      return;
    }
    onAddWeight(val, weightDate);
    setWeightVal('');
  };

  const sortedWeights = [...weights].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="fade-in">
      <p className="section-title">Weight Log</p>
      <div className="weight-log">
        <div className="weight-input-row">
          <input
            type="number"
            placeholder="Weight (কেজি) যেমন: 54.5"
            step="0.1"
            value={weightVal}
            onChange={(e) => setWeightVal(e.target.value)}
          />
          <input
            type="date"
            value={weightDate}
            onChange={(e) => setWeightDate(e.target.value)}
          />
          <button className="add-btn" onClick={handleAdd}>
            + যোগ করো
          </button>
        </div>
        <table className="log-table">
          <thead>
            <tr>
              <th>তারিখ</th>
              <th>Weight</th>
              <th>পরিবর্তন</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sortedWeights.length === 0 ? (
              <tr>
                <td colSpan="4" className="empty">
                  এখনো কোনো রেকর্ড নেই। উপরে weight যোগ করো!
                </td>
              </tr>
            ) : (
              sortedWeights.map((w, i) => {
                const prev = sortedWeights[i + 1];
                let changeHTML = '—';
                if (prev) {
                  const diff = (w.weight - prev.weight).toFixed(1);
                  const cls = diff >= 0 ? 'change-pos' : 'change-neg';
                  changeHTML = (
                    <span className={cls}>
                      {diff > 0 ? '+' : ''}
                      {diff} কেজি
                    </span>
                  );
                }
                return (
                  <tr key={w._id || i}>
                    <td>{formatDate(w.date)}</td>
                    <td>
                      <strong>{w.weight}</strong> কেজি
                    </td>
                    <td>{changeHTML}</td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => onDeleteWeight(w._id)}
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <p className="section-title">লক্ষ্যমাত্রা</p>
      <div className="two-col">
        <div className="card">
          <div className="card-icon">🎯</div>
          <div className="card-label">শুরুর Weight</div>
          <div className="card-value" style={{ color: 'var(--accent3)' }}>
            {profile.startWeight || '৫৪'} কেজি
          </div>
          <div className="card-sub">তোমার বর্তমান</div>
        </div>
        <div className="card">
          <div className="card-icon">🏆</div>
          <div className="card-label">৩ মাসের লক্ষ্য</div>
          <div className="card-value" style={{ color: 'var(--accent)' }}>
            {profile.targetWeight || '৫৮'} কেজি
          </div>
          <div className="card-sub">+{(profile.targetWeight || 58) - (profile.startWeight || 54)} কেজি muscle gain</div>
        </div>
      </div>

      <p className="section-title">Monthly Milestone</p>
      <div className="card">
        <div style={{ fontFamily: "var(--font-bn)" }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border)', fontSize: '14px' }}>
            <span>📅 ১ম মাস শেষে</span>
            <span style={{ color: 'var(--accent)' }}>+১.৫ কেজি</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border)', fontSize: '14px' }}>
            <span>📅 ২য় মাস শেষে</span>
            <span style={{ color: 'var(--accent)' }}>+৩ কেজি</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', fontSize: '14px' }}>
            <span>📅 ৩য় মাস শেষে</span>
            <span style={{ color: 'var(--accent)' }}>+৪ কেজি</span>
          </div>
        </div>
      </div>
    </div>
  );
}
