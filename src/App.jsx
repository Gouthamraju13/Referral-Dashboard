import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header/Header.jsx'
import StatsCards from './components/StatsCards/StatsCards.jsx'
import ReferralPanel from './components/ReferralPanel/ReferralPanel.jsx'
import ReferralTable from './components/ReferralTable/ReferralTable.jsx'
import './App.css'

const API_URL =
  'https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/d4457a9c-6134-46a5-b31c-60ad13a3e2f6_userData.json'

const ROWS_PER_PAGE = 10

const NAMES = [
  'Aarav Sharma', 'Priya Nair', 'Rahul Mehta', 'Sneha Patel', 'Vikram Rao',
  'Ananya Iyer', 'Karan Gupta', 'Deepika Singh', 'Arjun Reddy', 'Meera Joshi',
  'Rohit Kumar', 'Kavya Pillai', 'Aditya Verma', 'Pooja Agarwal', 'Nikhil Bose',
  'Swati Mishra', 'Suresh Tiwari', 'Lakshmi Nambiar', 'Tarun Saxena', 'Riya Desai',
  'Amit Shah', 'Bhavna Choudhary', 'Siddharth Kapoor', 'Mansi Jain', 'Dhruv Pandey',
  'Nisha Kulkarni', 'Harish Shetty', 'Aparna Menon', 'Rohan Malhotra', 'Chitra Venkat',
  'Sandeep Yadav',
]

const statistics = [
  { label: 'Total Balance',       value: '₹2,45,800', icon: '💰', color: '#3b82f6' },
  { label: 'Discount Percentage', value: '18%',        icon: '🎯', color: '#0ea5e9' },
  { label: 'Total Referral',      value: '142',        icon: '👥', color: '#10b981' },
  { label: 'Discount Amount',     value: '₹12,400',   icon: '🏷️', color: '#f59e0b' },
  { label: 'Commission Amount',   value: '₹38,250',   icon: '🧾', color: '#8b5cf6' },
  { label: 'Total Earning',       value: '₹86,500',   icon: '📈', color: '#ef4444' },
  { label: 'Commission Discount', value: '₹5,100',    icon: '🔖', color: '#06b6d4' },
  { label: 'Total Bank Transfer', value: '₹1,98,300', icon: '🏦', color: '#be185d' },
]

const referral = {
  link: 'https://nxtwave.com/referral/goutham2026',
  code: 'REF-GK-2026',
}

function App() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [notification, setNotification] = useState('')

  useEffect(() => {
    let cancelled = false
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load referrals')
        return res.json()
      })
      .then((json) => {
        if (!cancelled) {
          const enriched = (json || []).map((row, i) => ({
            ...row,
            name: NAMES[i] || `User ${row.user_id}`,
          }))
          setRows(enriched)
          setLoading(false)
          setError('')
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message || 'Unable to fetch referral data')
          setLoading(false)
        }
      })
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setPage(1), 0)
    return () => clearTimeout(t)
  }, [search])

  const filteredRows = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return rows
    return rows.filter((item) =>
      (item.name?.toLowerCase() || '').includes(q)
    )
  }, [rows, search])

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / ROWS_PER_PAGE))
  const currentRows = filteredRows.slice(
    (page - 1) * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE,
  )

  const copyToClipboard = async (value, label) => {
    try {
      await navigator.clipboard.writeText(value)
      setNotification(`${label} copied!`)
    } catch {
      setNotification('Copy failed')
    } finally {
      window.setTimeout(() => setNotification(''), 1800)
    }
  }

  const handleTryFree = () => {
    setNotification('Starting your free trial…')
    window.setTimeout(() => setNotification(''), 1800)
  }

  return (
    <div className="dashboard">
      <Header
        search={search}
        onSearchChange={setSearch}
        onTryFree={handleTryFree}
      />

      <main className="content">
        <section className="home-section">
          <StatsCards stats={statistics} />
        </section>

        <section className="home-section">
          <ReferralPanel referral={referral} onCopy={copyToClipboard} />
        </section>

        <section className="home-section">
          <ReferralTable
            filteredRows={filteredRows}
            currentRows={currentRows}
            loading={loading}
            error={error}
            search={search}
            onSearchChange={setSearch}
            page={page}
            totalPages={totalPages}
            onPrevious={() => setPage((p) => Math.max(p - 1, 1))}
            onNext={() => setPage((p) => Math.min(p + 1, totalPages))}
            onPageSelect={(p) => setPage(p)}
          />
        </section>
      </main>

      {notification && (
        <div className="copy-toast" key={notification}>
          {notification}
        </div>
      )}
    </div>
  )
}

export default App