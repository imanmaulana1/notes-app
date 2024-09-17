import React from 'react';
import NoteList from '../NoteList/NoteList';

const NoteArsip = ({ data = [], onSubmit, onArchive, onDelete }) => {
  const isArchived = (item) => item.archived;

  return (
    <>
      <NoteList
        data={data}
        filterFn={isArchived}
        title='Arsip'
        onSubmit={onSubmit}
        onArchive={onArchive}
        onDelete={onDelete}
      />
    </>
  );
};

export default NoteArsip;
