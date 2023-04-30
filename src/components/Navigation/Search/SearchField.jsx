import React from 'react';
import HeroIcon from '../../ui/HeroIcon';
import styles from './Search.module.scss';
const SearchField = ({ searchTerm, handleSearch, reset }) => {
  const [data, setData] = React.useState(searchTerm);
  React.useEffect(() => {
    setData(searchTerm);
  }, [searchTerm]);
  return (
    <div className={styles.search}>
      <HeroIcon name="MagnifyingGlassIcon" iconStyle="h-5 w-5 text-white cursor-pointer mr-2" />
      <input placeholder="Search" value={data} onChange={handleSearch} />
      {searchTerm && (
        <HeroIcon
          name="XMarkIcon"
          iconStyle="h-5 w-5 text-white cursor-pointer hover:text-gray-500"
          onClick={() => reset('')}
        />
      )}
    </div>
  );
};

export default SearchField;
