import React, { FC } from 'react';
import useBooks from 'hooks/use-books';
import { Book } from 'services/mangarel/models/book';

type Props = {
  books: Book[];
  loading?: boolean;
};

const Calendar: FC<Props> = ({ books, loading }) => {
  return (
    <>
      {{ books }} {{ loading }}
    </>
  );
};

const CalendarContainer: FC = () => {
  const { books, loading } = useBooks({ limit: 50 });

  return <Calendar books={books} loading={loading} />;
};

export default CalendarContainer;
