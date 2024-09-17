import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

const NoteInput = ({ onSubmit }) => {
  const [note, setNote] = useState({
    id: '',
    title: '',
    body: '',
    archived: false,
    createdAt: '',
  });

  const [limit, setLimit] = useState(50);

  const maxLength = 50;

  const handleTitleChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setNote((prev) => ({ ...prev, title: e.target.value }));
      setLimit(50 - e.target.value.length);
    }
  };

  const handleBodyChange = (e) => {
    setNote((prev) => ({ ...prev, body: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      ...note,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };

    onSubmit(newNote);

    setNote({
      id: '',
      title: '',
      body: '',
      archived: false,
      createdAt: '',
    });

    setLimit(50);
  };

  return (
    <div className='note-input'>
      <h2>Buat catatan</h2>
      <form onSubmit={handleSubmit}>
        <p className='note-input__title__char-limit'>Sisa karakter: {limit}</p>
        <Input
          type='text'
          placeholder='Ini adalah judul...'
          className='note-input__title'
          value={note.title}
          onChange={handleTitleChange}
          required={true}
        />

        <textarea
          className='note-input__body'
          placeholder='Tuliskan catatanmu disini...'
          value={note.body}
          onChange={handleBodyChange}
          required
        ></textarea>
        <Button type='submit'>Buat</Button>
      </form>
    </div>
  );
};

export default NoteInput;
