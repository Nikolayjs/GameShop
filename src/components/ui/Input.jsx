import React from 'react';
import HeroIcon from './HeroIcon';
const Input = ({ placeholder, icon }) => {
  return (
    <div className="mx-auto py-2">
      <div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5 ">
            {icon ? <HeroIcon name={icon} iconStyle="h-5 w-5 text-[#646366]" /> : ''}
          </div>
          <input
            type="text"
            id="search"
            className={`block border-none ring-none bg-[#171719] text-[#646366] w-full rounded-2xl ${
              icon ? 'pl-10' : ''
            } focus:ring-0 focus:ring-offset-0`}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
