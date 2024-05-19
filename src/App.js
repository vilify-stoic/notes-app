import React, { useState, useMemo } from 'react';
import './style.css';
import NewNoteForm from './components/NewNoteForm.js';
import NoteContainer from './components/NoteContainer.js';
import getUuid from './utils/getUuid.js';
import SearchBox from './components/SearchBox.js';

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [notes, setNotes] = useState([]);

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => note.text.includes(searchKeyword));
  }, [notes, searchKeyword]);

  const updateNote = (text, id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (!index) return;
    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  const addNote = (text) => {
    const note = {
      id: getUuid(),
      time: new Date().toLocaleString(),
      text,
    };
    setNotes((prevNotes) => {
      return [note, ...prevNotes];
    });
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const onSearch = (text) => {
    setSearchKeyword(text);
  };

  return (
    <div className="App">
      <SearchBox searchKeyword={searchKeyword} onSearch={onSearch} />
      <NewNoteForm addNote={addNote} />
      <NoteContainer
        notes={filteredNotes}
        deleteNote={deleteNote}
        updateNote={updateNote}
      />
    </div>
  );
};

export default App;
