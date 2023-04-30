import React from 'react';

const Card = ({ title, image, backgroundImage, children, onClick, tinyImage }) => {
  if (image) {
    return (
      <div className="mx-auto overflow-hidden rounded-lg bg-black/20 shadow">
        <img
          src={image}
          className="aspect-video min-h-[250px] min-w-full object-cover cursor-pointer"
          alt=""
        />
        <div className="p-4 text-gray-300">{children}</div>
      </div>
    );
  } else if (backgroundImage) {
    return (
      <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-black/20 shadow">
        <div>
          <img src={backgroundImage} className="w-full object-cover" alt="" />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black"></div>
        <div className="absolute inset-x-0 bottom-0 z-20 p-4">{children}</div>
      </div>
    );
  } else {
    return (
      <div className="mx-auto max-w-xl rounded-lg bg-black/20 shadow m-2">
        <ul className="divide-y divide-gray-400 py-2 px-4">
          <li className="flex py-4">
            <div className="p-4 flex-1">{children}</div>
            <div>
              <img src={tinyImage} className="h-20 w-20 rounded-lg object-cover" alt="" />
            </div>
          </li>
        </ul>
      </div>
    );
  }
};

export default Card;
