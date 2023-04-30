import React from 'react';

const TextField = ({
  label,
  placeholder,
  inputId,
  value,
  onChange,
  errors,
  helperText,
  type,
  ref,
  customStyle = '',
}) => {
  if (label) {
    return (
      <div className="mx-auto max-w-3xl mb-2">
        <div>
          <label
            htmlFor={inputId}
            className={
              errors
                ? "mb-1 mt-1 block text-sm font-medium  text-[#646366]  after:ml-0.5 after:text-red-500 after:content-['*']"
                : 'mb-1 block text-sm font-medium text-gray-500 after:ml-0.5 after:text-red-500'
            }
          >
            {label}
          </label>
          <input
            type={type ? type : 'text'}
            id={inputId}
            value={value}
            className={
              errors
                ? 'block bg-[#171719] text-[#646366] w-full rounded-md border-red-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500'
                : `${customStyle} block border-none ring-none bg-[#171719] text-[#646366] w-full rounded-2xl focus:ring-0 focus:ring-offset-0`
            }
            placeholder={placeholder ? placeholder : label}
            ref={ref}
            onChange={onChange}
          />
          {errors ? <p className="mt-1 text-sm text-red-500">{helperText}</p> : ''}
        </div>
      </div>
    );
  } else {
    return (
      <div className="max-w-3xl w-full mb-2">
        <div>
          <input
            type={type ? type : 'text'}
            id={inputId}
            value={value}
            className={
              errors
                ? 'block bg-[#171719] text-[#646366] w-full rounded-md border-red-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500'
                : `${customStyle} block border-none ring-none bg-[#171719] text-[#646366] w-full rounded-2xl focus:ring-0 focus:ring-offset-0`
            }
            placeholder={placeholder}
            ref={ref}
            onChange={onChange}
          />
          {errors ? <p className="mt-1 text-sm text-red-500">{helperText}</p> : ''}
        </div>
      </div>
    );
  }
};

export default TextField;
