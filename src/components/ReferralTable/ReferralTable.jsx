import Pagination from '../Pagination/Pagination.jsx'
import './ReferralTable.css'

const ROWS_PER_PAGE = 10

const SERVICE_STYLES = {
  PM:       { bg: 'rgba(59,130,246,0.15)',  color: '#60a5fa' },
  B2b:      { bg: 'rgba(6,182,212,0.15)',   color: '#22d3ee' },
  HR:       { bg: 'rgba(249,115,22,0.15)',  color: '#fb923c' },
  Graphics: { bg: 'rgba(139,92,246,0.15)',  color: '#a78bfa' },
  Frontend: { bg: 'rgba(16,185,129,0.15)',  color: '#34d399' },
}

function getInitials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function formatDate(str) {
  const [y, m, d] = str.split('/')
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  return `${d} ${months[parseInt(m, 10) - 1]} ${y}`
}

function formatProfit(n) {
  return '₹' + Number(n).toLocaleString('en-IN')
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

export default function ReferralTable({
  filteredRows,
  currentRows,
  loading,
  error,
  search,
  onSearchChange,
  page,
  totalPages,
  onPrevious,
  onNext,
  onPageSelect,
}) {
  return (
    <div className="table-section">
      {/* Top bar */}
      <div className="table-top">
        <div className="table-title">
          <h2>Referral Tracking</h2>
          <p>
            {loading
              ? 'Loading…'
              : `${filteredRows.length} referral${filteredRows.length !== 1 ? 's' : ''} found`}
          </p>
        </div>

        <div className="table-search">
          <span className="table-search-icon"><SearchIcon /></span>
          <input
            type="text"
            placeholder="Search by name…"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Filter referrals by name"
          />
        </div>
      </div>

      {/* Table body */}
      <div className="table-wrap">
        {loading ? (
          <div className="table-loading">
            <div className="table-spinner" />
            <p>Loading referrals…</p>
          </div>
        ) : error ? (
          <div className="table-error">⚠️ {error}</div>
        ) : (
          <table className="ref-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Service Name</th>
                <th>Date</th>
                <th>Profit</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.length === 0 ? (
                <tr>
                  <td colSpan={4}>
                    <div className="table-empty">
                      <span className="table-empty-icon">🔍</span>
                      <p>
                        No matching data
                        {search && <> for <span>"{search}"</span></>}
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                currentRows.map((row) => {
                  const svc = SERVICE_STYLES[row.service_name] || {
                    bg: 'rgba(100,116,139,0.15)',
                    color: '#94a3b8',
                  }
                  return (
                    <tr key={row.user_id}>
                      <td>
                        <div className="td-name-cell">
                          <div className="td-initials">{getInitials(row.name)}</div>
                          {row.name}
                        </div>
                      </td>
                      <td>
                        <span
                          className="td-service-badge"
                          style={{ background: svc.bg, color: svc.color }}
                        >
                          {row.service_name}
                        </span>
                      </td>
                      <td>
                        <span className="td-date">{formatDate(row.date)}</span>
                      </td>
                      <td>
                        <span className="td-profit">{formatProfit(row.profit)}</span>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination — only show when not loading/error and there's data */}
      {!loading && !error && filteredRows.length > 0 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          totalRows={filteredRows.length}
          rowsPerPage={ROWS_PER_PAGE}
          onPrevious={onPrevious}
          onNext={onNext}
          onPageSelect={onPageSelect}
        />
      )}
    </div>
  )
}