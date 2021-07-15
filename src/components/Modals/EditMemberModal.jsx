import React from 'react';
import Modal from '../Modal';
import { InputField } from '../InputField';
import { TextAreaField } from '../TextAreaField';

export function EditMemberModal(props) {
  const { isOpen, handleClick, title, buttonText, memberToEdit } = props;
  const { id, firstName, lastName, position, description } = memberToEdit;

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
            id: e.target.id.value
          };
          props.handleAction(data);
          props.handleClick(false);
        }}
      >
        <div className='pt-6 space-y-2'>
          <input type="hidden" id="id" name="id" value={id}></input>
          <InputField
            name='name'
            type='text'
            label='First name'
            placeholder='Enter your name'
            value={firstName}
          />
          <InputField
            name='surname'
            type='text'
            label='Last name'
            placeholder='Enter your surname'
            value={lastName}
          />
          <InputField
            name='position'
            type='text'
            label='Position'
            placeholder='Enter your position'
            value={position}
          />
          <TextAreaField
            name='description'
            label='Description'
            placeholder='Enter your description'
            value={description}
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
