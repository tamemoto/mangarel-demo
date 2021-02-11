import React, { FC, useContext } from 'react';
import { addDays, format } from 'date-fns';
import _ from 'lodash';

import { ThemeContext } from '../../../contexts';
import { Book } from '../../../services/mangarel/models/book';
import LinkButton from '../../atoms/buttons/LinkButton';

const RegisterCalendarButton: FC<{ book: Book }> = ({ book }) => {
  const theme = useContext(ThemeContext);
  const queryParams = {
    action: 'TEMPLATE',
    text: `『${book.title}』発売日`,
    details: `https://books.rakuten.co.jp/rb/${book.isbn}/`,
    sprop: `https://mangarel.com/book/${book.id}`,
    dates: '',
  };
  if (book.publishedOn) {
    const day1 = format(book.publishedOn.toDate(), 'yyyyMMdd');
    const day2 = format(addDays(book.publishedOn.toDate(), 1), 'yyyyMMdd');
    queryParams.dates = `${day1}/${day2}`;
  }

  const queries = new URLSearchParams();
  _.forEach(queryParams, (v, k) => {
    queries.set(k, v);
  });

  return (
    <LinkButton
      color={theme.color.google}
      icon="calendar plus outline"
      link={`https://www.google.com/calendar/event?${queries.toString()}`}
    >
      Google カレンダーに登録する
    </LinkButton>
  );
};

export default RegisterCalendarButton;
