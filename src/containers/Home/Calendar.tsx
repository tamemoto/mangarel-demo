import React, { FC } from 'react';
import useBooks from 'hooks/use-books';
import Calendar from 'components/organisms/Home/Calendar';

const CalendarContainer: FC = () => {
  const { books, loading } = useBooks({ limit: 1 });

  return <Calendar books={books} loading={loading} />;
};

export default CalendarContainer;
