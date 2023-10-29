import './styles.css';

type NotesProps = {
  id?: number,
  title: string,
  content: string,
}

export default function Notes({title, content}: NotesProps) {
  return (
    <div className="notes-grid">
        <div className="note-item">
            <div className="notes-header">
            <button>x</button>
            </div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    </div>
  )
}
