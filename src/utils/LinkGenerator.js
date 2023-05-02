import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export const linkGenerator = (data, id, onClick) => {
  return (
    <>
      {data.map((d) => (
        <Link
          key={uuidv4()}
          to={`${d.route}${id}`}
          className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-gray-300 hover:text-gray-500 dropdown"
          onClick={onClick}
        >
          {d.icon}
          {d.name}
        </Link>
      ))}
    </>
  );
};
