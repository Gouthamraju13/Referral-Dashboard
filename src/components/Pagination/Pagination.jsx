import './Pagination.css'

export default function Pagination({
  page,
  totalPages,
  totalRows,
  rowsPerPage,
  onPrevious,
  onNext,
  onPageSelect,
}) {
  const start = totalRows === 0 ? 0 : (page - 1) * rowsPerPage + 1
  const end = Math.min(page * rowsPerPage, totalRows)

  // Build page numbers: show up to 5 around current page
  const getPages = () => {
    const pages = []
    const delta = 2
    const left = Math.max(1, page - delta)
    const right = Math.min(totalPages, page + delta)
    for (let i = left; i <= right; i++) pages.push(i)
    return pages
  }

  return (
    <div className="pagination">
      <div className="pagination-info">
        Showing <strong>{start}–{end}</strong> of <strong>{totalRows}</strong> referrals
      </div>

      <div className="pagination-controls">
        <button
          className="page-btn"
          onClick={onPrevious}
          disabled={page <= 1}
          aria-label="Previous page"
        >
          <span className="page-btn-arrow">‹</span>
        </button>

        {getPages().map((p) => (
          <button
            key={p}
            className={`page-btn${p === page ? ' active' : ''}`}
            onClick={() => onPageSelect(p)}
            aria-label={`Page ${p}`}
            aria-current={p === page ? 'page' : undefined}
          >
            {p}
          </button>
        ))}

        <button
          className="page-btn"
          onClick={onNext}
          disabled={page >= totalPages}
          aria-label="Next page"
        >
          <span className="page-btn-arrow">›</span>
        </button>
      </div>
    </div>
  )
}