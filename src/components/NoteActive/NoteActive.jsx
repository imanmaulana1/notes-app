import React from 'react';
import NoteList from '../NoteList/NoteList';

const NoteActive = ({ data = [], onArchive, onDelete }) => {
  const isActive = (item) => !item.archived;
  return (
    <>
      <NoteList
        data={data}
        filterFn={isActive}
        title='Catatan Aktif'
        onArchive={onArchive}
        onDelete={onDelete}
      />
    </>
  );
};

export default NoteActive;
