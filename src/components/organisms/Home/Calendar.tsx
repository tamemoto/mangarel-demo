import React, { FC } from 'react';

import { Book } from 'services/mangarel/models/book';
import DividingHeader from '../../molecules/header/DividingHeader';
import CalenderList from '../../molecules/lists/CalendarList';
import ListLoader from '../../atoms/ListLoader';

type CalendarProps = {
  books: Book[];
  loading?: boolean;
};

const Calendar: FC<CalendarProps> = ({ books, loading }) => (
  <div>
    <DividingHeader>もうすぐ発売の新刊</DividingHeader>
    {loading ? <ListLoader /> : <CalenderList books={books} />}
  </div>
);

export default Calendar;
