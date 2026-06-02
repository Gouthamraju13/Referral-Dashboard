import { useState } from 'react'
import './ReferralPanel.css'

function CopyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ReferralCard({ label, value, onCopy }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await onCopy(value, label)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="referral-card">
      <div className="referral-label">
        <span className="referral-label-dot" />
        {label}
      </div>
      <div className="referral-row">
        <div className="referral-value" title={value}>{value}</div>
        <button
          className={`copy-btn${copied ? ' copied' : ''}`}
          onClick={handleCopy}
          aria-label={`Copy ${label}`}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  )
}

export default function ReferralPanel({ referral, onCopy }) {
  return (
    <div className="referral-panel">
      <ReferralCard
        label="Your Referral Link"
        value={referral.link}
        onCopy={onCopy}
      />
      <ReferralCard
        label="Your Referral Code"
        value={referral.code}
        onCopy={onCopy}
      />
    </div>
  )
}