import React from 'react';
import Modal from '../Modal';
import { InputField } from '../InputField';
import { TextAreaField } from '../TextAreaField';

export function AddNewMemberModal(props) {
  const { isOpen, handleClick, title, buttonText } = props;

  return (
    <Modal isOpen={isOpen} handleClick={handleClick} title={title}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = {
            firstName: e.target.name.value,
            lastName: e.target.surname.value,
            position: e.target.position.value,
            description: e.target.description.value,
          };
          props.handleAction(data);
          props.handleClick(false);
        }}
      >
        <div className='pt-6 space-y-2'>
          <InputField
            name='name'
            type='text'
            label='First name'
            placeholder='Enter your name'
          />
          <InputField
            name='surname'
            type='text'
            label='Last name'
            placeholder='Enter your surname'
          />
          <InputField
            name='position'
            type='text'
            label='Position'
            placeholder='Enter your position'
          />
          <TextAreaField
            name='description'
            label='Description'
            placeholder='Enter your description'
          />
        </div>

        <div className='mt-4'>
          <button
            type='submit'
            className='inline-flex justify-center px-4 py-2 text-sm font-medium text-indigo-900 bg-green-400 border border-transparent rounded-md hover:bg-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
          >
            {buttonText}
          </button>
        </div>
      </form>
    </Modal>
  );
}
