import React from 'react';
import HeroIcon from '../../ui/HeroIcon';
import styles from './Search.module.scss';
const SearchField = ({ searchTerm, handleSearch, reset, customStyle }) => {
  const [data, setData] = React.useState(searchTerm);
  React.useEffect(() => {
    setData(searchTerm);
  }, [searchTerm]);
  return (
    <div className={`${styles.search} ${customStyle}`}>
      <HeroIcon
        name="MagnifyingGlassIcon"
        iconStyle="h-5 w-5 text-white cursor-pointer mr-2 flex-1"
      />
      <input placeholder="Поиск" value={data} onChange={handleSearch} />
      {searchTerm ? (
        <HeroIcon
          name="XMarkIcon"
          iconStyle="h-5 w-5 text-white cursor-pointer hover:text-gray-500 flex-1"
          onClick={() => reset('')}
        />
      ) : (
        <span className="w-5"></span>
      )}
    </div>
  );
};

export default SearchField;
