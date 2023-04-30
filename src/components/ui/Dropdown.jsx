import React from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const Dropdown = ({ state, onLogout, link, setDropdown }) => {
  const ref = React.useRef();
  useOnClickOutside(ref, () => setDropdown(false));
  return (
    <div className={`${state ? 'flex' : 'hidden'} justify-center`}>
      <div className="relative inline-block">
        <div
          ref={ref}
          className="absolute -left-5 -top-[6px] z-10 mt-2 w-48 divide-y divide-gray-400 rounded-lg bg-black/90 text-left text-sm shadow-lg"
        >
          <div className="p-1">{link}</div>
          <div className="p-1">
            <a
              href="#"
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-300 hover:text-gray-500 dropdown"
              onClick={onLogout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
              Лог Аут
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
