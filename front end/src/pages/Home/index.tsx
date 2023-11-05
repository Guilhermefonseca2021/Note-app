import axios from 'axios';
import CreateNote from '../../components/CreateNote'
import Notes from '../../components/Notes'
import './styles.css'
import { useState, useEffect } from 'react';

type NotesProps = {
    id?: number,
    title: string,
    content: string,
}

const APIserver = axios.create({
  baseURL: 'http://localhost:3333'
})

export default function Home() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [notes, setNotes] = useState<NotesProps[]>([]);

  useEffect(() => {
    APIserver.get('/api/notes')
        .then(response => setNotes(response.data))
  }, [])

  function handleSubmit(data: NotesProps) {
    APIserver.post('/api/notes', { title, content }) 

    setTitle(title);
    setContent(content);
    setNotes([...notes, data])
  }
  
  function onNoteDelete(id: any) {
    APIserver.delete(`/api/notes/:${id}`)
    const updateNotes = notes.filter(note=> note.id !== note.id)
    setNotes(updateNotes)
  }

  return (
      <div className='my-app'>
        <CreateNote onSubmit={handleSubmit} />
        <div className='my-notes'>
            {notes.map(note => {
              return(
                <Notes 
                  key={note.id} 
                  title={note.title} 
                  content={note.content} 
                  onNoteDelete={onNoteDelete}  
                />
              )
            })}
        </div>
      </div>
    )
}
