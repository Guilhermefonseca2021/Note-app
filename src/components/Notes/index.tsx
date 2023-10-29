import './styles.css'

export default function Notes() {
  return (
    <div className="notes-grid">
        <div className="note-item">
            <div className="notes-header">
            <button>x</button>
            </div>
            <h2>Note title</h2>
            <p>Note Content</p>
        </div>
    </div>
  )
}
