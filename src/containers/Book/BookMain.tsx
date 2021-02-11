import React, { FC } from 'react';
import { useHistory, useParams } from 'react-router';

import useBook from 'hooks/use-book';
import BookMain from '../../components/organisms/Book/BookMain';
import paths from '../../routes/routes';

const BookMainContainer: FC = () => {
  const history = useHistory();
  const item: any = useParams();
  if (!item?.bookId) history.replace(paths.home);

  const { book } = useBook(item.bookId);

  return book ? <BookMain book={book} /> : <div />;
};

export default BookMainContainer;
