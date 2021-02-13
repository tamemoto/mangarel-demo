import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Book } from 'services/mangarel/models/book';
import CardDescription from '../../atoms/card/CardDescription';
import CardContent from '../../atoms/card/CardContent';
import CardTitle from '../../atoms/card/CardTitle';
import CardInfo from '../../atoms/card/CardInfo';
import SmallCoverImage from '../../atoms/images/SmallCoverImage';
import { getAuthorsText, getCoverImage, getHumanDate } from '../../item-tools';
import ItemCard from '../../atoms/card/ItemCard';

export const BookCard: FC<{ book: Book }> = ({ book }) => {
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
            <CardDescription>
              {book.publisher && book.publisher.name}
            </CardDescription>
          </CardInfo>
        </CardContent>
      </ItemCard>
    </Link>
  );
};
