import React, { FC, SyntheticEvent, useState } from 'react';
import useBookSearch from '../../hooks/use-books-search';
import BookList from '../../components/molecules/lists/BookList';
import SearchForm from '../../components/organisms/Search/SearchForm';

const SearchUnit: FC = () => {
  const [values, setValues] = useState({ q: '' });
  const { books, loading } = useBookSearch(values.q, { limit: 10 });

  const handleChange = (
    targetName: string,
    newValue: string,
    event?: SyntheticEvent,
  ) => {
    if (event) {
      event.persist();
    }

    setValues((v) => ({ ...v, [targetName]: newValue }));
  };

  return (
    <div>
      <SearchForm handleChange={handleChange} values={values} />
      <BookList books={books} loading={loading} />
    </div>
  );
};

export default SearchUnit;
