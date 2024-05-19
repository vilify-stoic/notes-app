import React from 'react';
import Note from './Note.js';

const NoteContainer = ({ notes, deleteNote, updateNote }) => {
  return (
    <div className="notecontainer">
      <h2 className="notecontainer__heading">Notes</h2>
      <div className="notecontainer__notes">
        {notes?.length ? (
          notes.map((note) => {
            return (
              <Note
                key={note.id}
                note={note}
                deleteNote={deleteNote}
                updateNote={updateNote}
              />
            );
          })
        ) : (
          <h1> No Notes available</h1>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
