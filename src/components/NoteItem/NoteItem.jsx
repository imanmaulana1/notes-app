import React from 'react';
import Button from '../ui/Button';
import { showFormattedDate } from '../../utils';

const NoteItem = ({
  data: { id, title, createdAt, body, archived },
  onArchive,
  onDelete,
}) => {
  return (
    <div className='note-item'>
      <div className='note-item__content'>
        <h3 className='note-item__title'>{title}</h3>
        <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
        <p className='note-item__body'>{body}</p>
      </div>
      <div className='note-item__action'>
        <Button
          type='button'
          className='note-item__delete-button'
          onClick={() => onDelete(id)}
        >
          Delete
        </Button>
        <Button
          type='button'
          className='note-item__archive-button'
          onClick={() => onArchive(id)}
        >
          {archived ? 'Pindahkan' : 'Arsipkan'}
        </Button>
      </div>
    </div>
  );
};

export default NoteItem;
