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

const Apiserver = axios.create({
  baseURL: 'https://localhost3333'
})

export default function Home() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [notes, setNotes] = useState<NotesProps[]>([
    {
      id: 1,
      title: "note title 1",
      content: "content 1",
    },
    {
      id: 2,
      title: "note title 1",
      content: "content 1",
    },
  ]);

  useEffect(() => {
    Apiserver.get('/notes')
      .then(response => console.log(response.data))
  }, [])

  function handleSubmit(data: NotesProps) {
    console.log('dados do App', { title, content })

    setTitle(title);
    setContent(content);
    setNotes([...notes, data])
  }

  function onNoteDelete() {
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