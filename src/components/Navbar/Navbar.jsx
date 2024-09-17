import React from 'react';
import NoteSearch from '../NoteSearch/NoteSearch';

const Navbar = ({ onSearch }) => {
  return (
    <div className='note-app__header'>
      <h1>Notes</h1>
      <NoteSearch onSearch={onSearch} />
    </div>
  );
};

export default Navbar;
