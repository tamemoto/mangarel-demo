import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Book } from '../../../services/mangarel/models/book';
import ListLoader from '../../atoms/ListLoader';
import { BookCard } from '../card/BookCard';

const ListWrapper = styled.div`
  margin: 1rem o 0.5rem;
`;

const BookList: FC<{ books: Book[]; loading?: boolean }> = ({
  books,
  loading = false,
}) => {
  return loading ? (
    <ListLoader />
  ) : (
    <ListWrapper>
      {books.map((book) => (
        <BookCard book={book} key={book.isbn} />
      ))}
    </ListWrapper>
  );
};

export default BookList;
