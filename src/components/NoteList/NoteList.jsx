import React from 'react';
import NoteItem from '../NoteItem/NoteItem';

const NoteList = ({ data = [], filterFn, title, onArchive, onDelete }) => {
  const filteredData = data.filter(filterFn);

  return (
    <>
      <h2>{title}</h2>
      <div className='notes-list'>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <NoteItem
              key={item.id}
              data={item}
              onArchive={onArchive}
              onDelete={onDelete}
            />
          ))
        ) : (
          <p className='notes-list__empty-message'>Tidak ada catatan</p>
        )}
      </div>
    </>
  );
};

export default NoteList;
