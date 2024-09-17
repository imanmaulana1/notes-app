import React, { useState } from 'react';
import Input from '../ui/Input';

const NoteSearch = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    e.preventDefault();

    setInput(e.target.value);
    onSearch(e.target.value);
  };
  return (
    <div className='note-search'>
      <Input
        type='text'
        placeholder='Cari catatan...'
        onChange={handleChange}
        value={input}
      />
    </div>
  );
};

export default NoteSearch;
