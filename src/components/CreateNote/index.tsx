import { useState } from 'react';
import './styles.css';

type NotesProps = {
  id: number,
  title: string,
  content: string,
}

export default function CreateNote() {
  const [notes, setNotes] = useState<NotesProps[]>([]);
  
  function handleCreateNote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event)
  }

  return (
    <div>
        <form className='app-container' onSubmit={handleCreateNote}>
          <input type="text" placeholder='title' required />

          <textarea 
            name="content" 
            rows={10}
            placeholder='type here'
          >
          </textarea>

          <button type='submit'>
            add note
          </button>
        </form>
    </div>
  )
}
