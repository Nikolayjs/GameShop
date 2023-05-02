import React from 'react';
import useSearch from './useSearch';
import styles from './Search.module.scss';
import SearchField from './SearchField';
import SearchList from './SearchList';
const Search = ({ customStyle }) => {
  const { isSuccess, data, handleSearch, searchTerm, setSearchTerm } = useSearch();
  return (
    <div className={styles.wrapper}>
      <SearchField
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        reset={setSearchTerm}
        customStyle={customStyle}
      />
      {isSuccess && <SearchList games={data.items || []} reset={setSearchTerm} />}
    </div>
  );
};

export default Search;
