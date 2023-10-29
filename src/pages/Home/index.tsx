import CreateNote from '../../components/CreateNote'
import Notes from '../../components/Notes'
import './styles.css'
import { useState } from 'react';

type NotesProps = {
    id: number,
    title: string,
    content: string,
}

export default function Home() {
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
        {
          id: 3,
          title: "note title 1",
          content: "content 1",
        },
        {
          id: 4,
          title: "note title 1",
          content: "content 1",
        },
    ]);

    return (
        <div className='my-app'>
            <CreateNote />
            <div className='my-notes'>
                {notes.map(note => {
                    return(
                    <Notes key={note.id} />
                    )
                })}
            </div>
        </div>
    )
}
