import { useState } from "react";
import "./styles.css";

interface NotesProps {
  id?: number;
  title: string;
  content: string;
}

type Props = {
  onSubmit: ({ id, title, content }: NotesProps) => void;
};

export default function CreateNote({ onSubmit }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleCreateNote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("dados do callback", { title, content });
    onSubmit({ id: 1, title, content });
    setTitle("");
    setContent("");
  }

  return (
    <div>
      <form className="app-container" onSubmit={handleCreateNote}>
        <input
          type="text"
          placeholder="title"
          value={title}
          required
          onChange={(event) => setTitle(event.target.value)}
        />

        <textarea
          name="content"
          rows={10}
          value={content}
          placeholder="type here"
          onChange={(event) => setContent(event.target.value)}
        ></textarea>

        <button type="submit">add note</button>
      </form>
    </div>
  );
}
