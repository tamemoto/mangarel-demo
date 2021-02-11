import React, { FC } from 'react';

import { Book } from '../../../services/mangarel/models/book';
import LargeCoverImage from '../../atoms/images/LargeCoverImage';
import { getCoverImage } from '../../item-tools';
import MainFrame from '../../atoms/MainFrame';
import WorkTitle from '../../atoms/work/WorkTitle';
import WorkAuthors from '../../atoms/work/WorkAuthors';
import WorkPublishedOn from '../../atoms/work/WorkPublishedOn';
import ButtonGroup from '../../atoms/work/ButtonGroup';
import Spacer from '../../atoms/Spacer';
import RegisterCalendarButton from './RegisterCalendarButton';
import RakutenBooksButton from './RakutenBooksButton';
import WorkPlaceholder from '../../atoms/work/WorkPlaceHolder';

const BookMain: FC<{ book: Book }> = ({ book }) => (
  <MainFrame>
    <Spacer height={0.25} />
    {!book.isbn ? (
      <WorkPlaceholder />
    ) : (
      <>
        <div>
          <LargeCoverImage src={getCoverImage(book, 'large')} floated="left" />
          <WorkTitle title={book.title} />
          <WorkAuthors authors={book.authors} />
          <WorkPublishedOn publishedOn={book.publishedOn} />
        </div>
        <Spacer height={0.25} />
        <ButtonGroup>
          <RegisterCalendarButton book={book} />
          <RakutenBooksButton book={book} />
        </ButtonGroup>
      </>
    )}
  </MainFrame>
);

export default BookMain;
