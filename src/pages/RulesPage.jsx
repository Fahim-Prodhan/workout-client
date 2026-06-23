import { RULES } from '../data';

export default function RulesPage() {
  return (
    <div className="fade-in">
      <p className="section-title">Daily Rules (মাস্ট ফলো)</p>
      <ul className="rules-list">
        {RULES.map((r, i) => (
          <li className="rule-item" key={i}>
            <div className="rule-icon">{r.icon}</div>
            <div className="rule-text">
              <strong>{r.title}</strong> — {r.desc}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
