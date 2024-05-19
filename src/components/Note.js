import React, { useRef } from 'react';
import { Trash2 } from 'lucide-react';

function Note({ note, updateNote, deleteNote }) {
  const timeoutRef = useRef(null);

  const debounce = (func) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(func, 1000);
  };

  const updateText = (text, id) => {
    debounce(() => updateNote(text, id));
  };

  return (
    <div className="note">
      <textarea
        className="addnote__textarea"
        defaultValue={note.text}
        onChange={(e) => updateText(e.target.value, note.id)}
      />
      <div className="note__footer">
        <p>{note.time}</p>
        <Trash2 onClick={() => deleteNote(note.id)} />
      </div>
    </div>
  );
}
export default Note;
