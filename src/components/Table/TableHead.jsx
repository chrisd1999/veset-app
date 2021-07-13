import React from 'react';

export function TableHead() {
  return (
    <thead className='bg-gray-50'>
      <tr>
        <th
          scope='col'
          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
        >
          Name
        </th>
        <th
          scope='col'
          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
        >
          Surname
        </th>
        <th
          scope='col'
          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
        >
          Position
        </th>
        <th
          scope='col'
          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
        >
          Description
        </th>
        <th scope='col' className='relative px-6 py-3'>
          <span className='sr-only'>Edit</span>
          <span className='sr-only'>Delete</span>
        </th>
      </tr>
    </thead>
  );
}
