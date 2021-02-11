import React, { FC, useContext } from 'react';
import { isFuture } from 'date-fns';

import { ThemeContext } from '../../../contexts';
import { Book } from '../../../services/mangarel/models/book';
import LinkButton from '../../atoms/buttons/LinkButton';

const RakutenBooksButton: FC<{ book: Book }> = ({ book }) => {
  const theme = useContext(ThemeContext);
  const linkText =
    book.publishedOn && isFuture(book.publishedOn.toDate())
      ? '楽天ブックスへ予約注文する'
      : '楽天ブックスの商品ページにいく';

  return (
    <LinkButton
      color={theme.color.rakuten}
      iconElement={
        <img src="/images/comingsoon-small.png" alt="楽天ブックス" width="13" />
      }
      link={`https://books.rakuten.co.jp/rb/${book.rbCode}/`}
    >
      {linkText}
    </LinkButton>
  );
};

export default RakutenBooksButton;
