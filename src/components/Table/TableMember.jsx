import React from 'react';
import { Button } from '../Button';

export function TableMember({ teamMember, editTeamMember, deleteMember }) {
  const { firstName, lastName, position, description, id } = teamMember;

  return (
    <tr className='relative hover:bg-gray-50'>
      <td className='max-w-[12em] break-words px-6 py-4 whitespace-wrap text-sm text-gray-900'>
        {firstName}
      </td>
      <td className='max-w-[12em] break-words px-6 py-4 whitespace-wrap text-sm text-gray-900'>
        {lastName}
      </td>
      <td className='max-w-[12em] break-words px-6 py-4 whitespace-wrap text-sm text-gray-900'>
        {position}
      </td>
      <td className='max-w-sm px-6 py-4 whitespace-wrap text-sm text-gray-900'>
        <span className='line-clamp-4 break-words overflow-ellipsis'>
          {description}
        </span>
      </td>
      <td className='px-6 py-4 space-x-4 whitespace-nowrap text-right text-sm font-medium'>
        <Button
          dataTestId='edit-btn'
          handleClick={() => editTeamMember(teamMember)}
          className='px-5 ring-green-400 rounded-2xl text-indigo-600 hover:bg-green-100'
        >
          Edit
        </Button>
        <Button
          dataTestId='delete-btn'
          handleClick={() => deleteMember(id)}
          className='px-3 ring-red-200 rounded-2xl text-red-500 hover:bg-red-100'
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}
