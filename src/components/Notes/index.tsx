import './styles.css';

type NotesProps = {
  id?: number,
  title: string,
  content: string,
  onNoteDelete: (note: object) => void;
}

export default function Notes({title, content, onNoteDelete}: NotesProps ) {

  return (
    <div className="notes-grid">
        <div className="note-item">
            <div className="notes-header">
            <button onClick={note =>
                    onNoteDelete(note)}>x</button>
            </div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    </div>
  )
}
