import React from 'react';
import * as OutlineIcons from '@heroicons/react/24/outline';
import * as SolidIcons from '@heroicons/react/24/solid';

const HeroIcon = ({ name, iconStyle, onClick, isSolid }) => {
  const OutlineIconComponent = OutlineIcons[name];
  const SolidIconComponent = SolidIcons[name];
  if (isSolid) {
    return (
      <SolidIconComponent className={iconStyle} onClick={onClick} /> || (
        <SolidIconComponent.ExclamationCircleIcon />
      )
    );
  } else {
    return (
      <OutlineIconComponent className={iconStyle} onClick={onClick} /> || (
        <OutlineIconComponent.ExclamationCircleIcon />
      )
    );
  }
};

export default HeroIcon;
