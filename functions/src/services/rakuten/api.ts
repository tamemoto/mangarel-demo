import fetch from 'node-fetch';
import _ from 'lodash';
import { BookItem } from './models/book-item'; //eslint-disable-line

const BASE_URL =
  'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404';

type SearchParams = {
  title?: string | null;
  author?: string | null;
  publisherName?: string | null;
  isbn?: string | null;
  booksGenreId?: string;
  outOfStockFlag?: number;
  sort?: string;
};

const defaultSearchParams: SearchParams = {
  booksGenreId: '001001',
  outOfStockFlag: 1,
};

export const findBookItem = async (
  params: SearchParams,
  applicationId: string,
) => {
  const searchParams: SearchParams = { ...defaultSearchParams, ...params };
  const query = new URLSearchParams();

  // オブジェクトのkeyとvalueを順に出力、queryにセット
  _.forEach(searchParams, (v, k) => {
    let value = String(v || '').trim();
    if (value) {
      if (value === 'kodansha') {
        value = '講談社';
      }
      query.set(k, value);
    }
  });
  query.set('applicationId', applicationId);

  const url = `${BASE_URL}?${query.toString()}`;
  const bookItems: BookItem[] = [];
  const res = await fetch(url);
  const data = await res.json();

  if (data.Items) {
    data.Items.forEach((elem: { Item: BookItem }) => bookItems.push(elem.Item));
  }

  return bookItems[0] || null;
};
