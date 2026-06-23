export default function WaterPage({ waterCount, onToggleWater, showToast }) {
  const waterPct = Math.min((waterCount / 12) * 100, 100);

  return (
    <div className="fade-in">
      <div className="water-section">
        <div className="water-title">💧 পানি Tracker</div>
        <div className="water-sub">প্রতিটি গ্লাস = ২৫০ml। লক্ষ্য: ১২ গ্লাস (৩ লিটার)</div>
        <div className="water-cups">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className={`water-cup ${i < waterCount ? 'filled' : ''}`}
              onClick={() => onToggleWater(i)}
            >
              💧
            </div>
          ))}
        </div>
        <div className="water-info">
          আজ পান করেছো: <span>{waterCount}</span> গ্লাস (
          <span>{(waterCount * 0.25).toFixed(2)}</span> লিটার)
        </div>
        <div style={{ marginTop: '16px' }}>
          <div className="progress-bar" style={{ height: '10px' }}>
            <div className="progress-fill fill-blue" style={{ width: `${waterPct}%` }} />
          </div>
        </div>
      </div>

      <div className="card">
        <div style={{ fontSize: '14px', fontFamily: "var(--font-bn)", lineHeight: '1.8', color: 'var(--text-muted)' }}>
          🕗 <strong style={{ color: 'var(--text)' }}>সকালে উঠে:</strong> ১ গ্লাস (খালি পেটে)<br />
          🍽️ <strong style={{ color: 'var(--text)' }}>খাওয়ার আগে:</strong> ১ গ্লাস<br />
          🏋️ <strong style={{ color: 'var(--text)' }}>Workout-এর সময়:</strong> ২ গ্লাস<br />
          🌙 <strong style={{ color: 'var(--text)' }}>রাতে ঘুমানোর আগে:</strong> ১ গ্লাস<br />
          <br />
          💡 পানি কম খেলে muscle তৈরি হয় না!
        </div>
      </div>
    </div>
  );
}
