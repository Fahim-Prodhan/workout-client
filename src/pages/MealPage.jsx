import { MEALS } from '../data';

export default function MealPage() {
  return (
    <div className="fade-in">
      <p className="section-title">দৈনিক খাবার রুটিন</p>
      {MEALS.map((m, i) => (
        <div className="meal-card" key={i}>
          <div className="meal-header">
            <div className="meal-icon" style={{ background: m.iconBg }}>
              {m.icon}
            </div>
            <div>
              <div className="meal-name">{m.name}</div>
              <div className="meal-time">{m.time}</div>
            </div>
          </div>
          <ul className="meal-items">
            {m.items.map((item, j) => (
              <li key={j}>
                <span>{item.food}</span>
                <span className="cal-badge">{item.cal}</span>
              </li>
            ))}
          </ul>
          <div className="meal-total">মোট: {m.total}</div>
          {m.alt && (
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px', fontFamily: "var(--font-bn)" }}>
              💡 {m.alt}
            </div>
          )}
        </div>
      ))}

      <div className="card" style={{ marginTop: '8px' }}>
        <div style={{ fontSize: '14px', fontFamily: "var(--font-bn)", color: 'var(--text-muted)' }}>
          📌 <strong style={{ color: 'var(--accent)' }}>মোট দৈনিক লক্ষ্য:</strong> ২২০০-২৪০০ ক্যালরি
          <br /><br />
          💡 <strong style={{ color: 'var(--yellow)' }}>টিপস:</strong> ডিম সবচেয়ে সস্তা protein। দিনে কমপক্ষে ৩টা খাও। চিনাবাদাম ও ছোলা muscle gain-এ দারুণ কাজ করে।
        </div>
      </div>
    </div>
  );
}
