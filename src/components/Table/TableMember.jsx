import React, { useRef } from 'react';
import { Button } from '../Button';

export function TableMember({
  firstName,
  lastName,
  position,
  description,
  id,
  deleteMember,
  editTeamMember,
}) {
  return (
    <tr className='relative hover:bg-gray-50'>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
        {firstName}
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
        {lastName}
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
        {position}
      </td>
      <td className='px-6 py-4 whitespace-wrap text-sm text-gray-900'>
        {description}
      </td>
      <td className='px-6 py-4 space-x-4 whitespace-nowrap text-right text-sm font-medium'>
        <Button
          handleClick={(e) => {
            e.preventDefault();
            editTeamMember(id);
          }}
          className='px-5 ring-green-400 rounded-2xl text-indigo-600 hover:bg-green-100'
        >
          Edit
        </Button>
        <Button
          handleClick={(e) => {
            e.preventDefault();
            deleteMember(id);
          }}
          className='px-3 ring-red-200 rounded-2xl text-red-500 hover:bg-red-100'
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}
