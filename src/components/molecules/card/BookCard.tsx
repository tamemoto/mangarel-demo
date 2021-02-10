import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// import { Book } from 'services/mangarel/models/book';
import CardDescription from '../../atoms/CardDescription';
import CardContent from '../../atoms/CardContent';
import CardTitle from '../../atoms/CardTitle';
import CardInfo from '../../atoms/CardInfo';
import SmallCoverImage from '../../atoms/SmallCoverImage';
import { getAuthorsText, getCoverImage, getHumanDate } from '../../item-tools';
import ItemCard from '../../atoms/ItemCard';

export const BookCard: FC = () => {
  const book = {
    id: 'aaa',
    title: 'text',
    titleReading: 'text',
    publisherId: 'aaaaaa',
    publisher: null,
    authorIds: [],
    authors: [],
    isbn: 'aaa',
    rbCode: 'aaa',
    hasImage: false,
    tokenMap: null,
    publishedOn: null,
    createdAt: null,
    updatedAt: null,
  };

  const authorsText = getAuthorsText(book);

  return (
    <Link to={`/book/${book.id}`}>
      <ItemCard key={book.isbn}>
        <CardContent>
          <SmallCoverImage src={getCoverImage(book)} floated="left" />
          <CardTitle>{book.title}</CardTitle>
          <CardInfo>
            <CardDescription>
              {authorsText && (
                <>
                  {authorsText}
                  <span className="separate"> | </span>
                </>
              )}
              {getHumanDate(book.publishedOn)}
            </CardDescription>
            <CardDescription>{book.publisher}</CardDescription>
          </CardInfo>
        </CardContent>
      </ItemCard>
    </Link>
  );
};
