import React from 'react';
import Modal from '../Modal';

export function ConfirmModal(props) {
  const { isOpen, handleClick, handleAction, title } = props;
  return (
    <Modal isOpen={isOpen} handleClick={handleClick} title={title}>
      <div className='mt-4 flex justify-between'>
        <button
          type='button'
          className='w-1/3 inline-flex justify-center px-4 py-2 text-sm font-medium text-indigo-900 bg-gray-400 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
          onClick={(e) => {
            e.preventDefault();
            return handleClick(false);
          }}
        >
          No
        </button>
        <button
          type='button'
          className='w-1/3 inline-flex justify-center px-4 py-2 text-sm font-medium text-indigo-900 bg-red-400 border border-transparent rounded-md hover:bg-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
          onClick={(e) => {
            e.preventDefault();
            return handleAction();
          }}
        >
          Delete member
        </button>
      </div>
    </Modal>
  );
}
