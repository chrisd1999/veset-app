import React from 'react';

export function InputField(props) {
  const { name, label, type, placeholder, value } = props;

  return (
    <div>
      <label htmlFor={name} className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <div className='mt-1 relative rounded-md shadow-sm'>
        <input
          type={type}
          name={name}
          id={name}
          className='h-full focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-4 sm:text-sm border-gray-300 rounded-md'
          placeholder={placeholder}
          defaultValue={value ? value : ''}
          required
        />
      </div>
    </div>
  );
}
