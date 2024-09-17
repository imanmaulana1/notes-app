import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import NoteInput from './NoteInput/NoteInput';
import NoteActive from './NoteActive/NoteActive';
import NoteArsip from './NoteArsip/NoteArsip';
import { getInitialData } from '../utils';

const App = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setData(getInitialData());
  }, []);

  const handleAdd = (value) => {
    setData((prev) => [...prev, value]);
  };

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handleToggleArchive = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, archived: !item.archived } : item
      )
    );
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredData =
    searchValue === ''
      ? data
      : data.filter((item) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase())
        );

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className='note-app__body'>
        <NoteInput onSubmit={handleAdd} />
        <NoteActive
          data={filteredData}
          onArchive={handleToggleArchive}
          onDelete={handleDelete}
        />
        <NoteArsip
          data={filteredData}
          onArchive={handleToggleArchive}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default App;
