import firebase from 'firebase';
import { Author } from './author';
import { Publisher } from './publisher';

export type Book = {
  id?: string;
  title: string;
  titleReading: string | null;
  publisherId: string;
  publisher: Publisher | null;
  authorIds: string[];
  authors: Author[];
  isbn: string;
  rbCode: string;
  hasImage: boolean;
  tokenMap: { [token: string]: boolean } | null;
  publishedOn: firebase.firestore.Timestamp | null;
  createdAt: firebase.firestore.Timestamp | null;
  updatedAt: firebase.firestore.Timestamp | null;
};

export const blankBook: Book = {
  title: '',
  titleReading: null,
  publisherId: '',
  publisher: null,
  authorIds: [],
  authors: [],
  isbn: '',
  rbCode: '',
  hasImage: false,
  tokenMap: null,
  publishedOn: null,
  createdAt: null,
  updatedAt: null,
};
