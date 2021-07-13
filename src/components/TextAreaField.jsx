import React from 'react';


export function TextAreaField({name, label, placeholder, value}) {
    return (
      <div>
        <label
          htmlFor={name}
          className='block text-sm font-medium text-gray-700'
        >
          {label}
        </label>
        <div className='mt-1 relative rounded-md shadow-sm'>
          <textarea
            name={name}
            id={name}
            placeholder={placeholder}
            defaultValue={value ? value : ''}
            className='resize-none focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-4 sm:text-sm border-gray-300 rounded-md'
          />
        </div>
      </div>
    );
}