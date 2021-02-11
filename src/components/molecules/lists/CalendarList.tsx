import React, { FC } from 'react';
import styled from '@emotion/styled';

import { Book } from '../../../services/mangarel/models/book';
import { BookCard } from '../card/BookCard';

const CalenderList: FC<{ books: Book[] }> = ({ books }) => {
  const ListWrapper = styled.div`
    margin: 1rem 0.5rem;
  `;

  return (
    <ListWrapper>
      {books.map((book) => (
        <BookCard book={book} key={book.isbn} />
      ))}
    </ListWrapper>
  );
};

export default CalenderList;
