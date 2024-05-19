import React, { useState } from 'react';
import { CornerRightDown } from 'lucide-react';

const NewNoteForm = ({ addNote }) => {
  const [text, setText] = useState('');

  const onSave = () => {
    if (text !== '') {
      addNote(text);
      setText('');
    }
  };

  return (
    <div className="addnote">
      <textarea
        className="addnote__textarea"
        placeHolder="Add New Note"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="addnote__savebutton">
        <CornerRightDown size={16} onClick={onSave} />
      </div>
    </div>
  );
};
export default NewNoteForm;
