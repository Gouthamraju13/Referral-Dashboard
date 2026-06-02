import './StatsCards.css'

function StatCard({ stat }) {
  return (
    <div className="stat-card" style={{ '--card-color': stat.color }}>
      <div className="stat-top">
        <div className="stat-icon">{stat.icon}</div>
        <span className="stat-trend">+2.4%</span>
      </div>
      <div className="stat-value">{stat.value}</div>
      <div className="stat-label">{stat.label}</div>
    </div>
  )
}

export default function StatsCards({ stats }) {
  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <StatCard key={stat.label} stat={stat} />
      ))}
    </div>
  )
}