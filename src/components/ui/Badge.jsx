import React from 'react';

const Badge = ({ children, color }) => {
  return (
    <div className={`rounded-full relative h-4 w-4 ${color} flex`}>
      <span className={`text-xs font-semibold text-white m-auto`}>{children}</span>
    </div>
  );
};

export default Badge;
