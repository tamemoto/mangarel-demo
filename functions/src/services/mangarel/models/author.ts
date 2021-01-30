import firebase from 'firebase';

export type Author = {
  id?: string;
  name: string;
  nameReading: string | null;
  variation: string;
  createdAt: firebase.firestore.Timestamp | null;
  updatedAt: firebase.firestore.Timestamp | null;
};

export const blankAuthor: Author = {
  name: '',
  nameReading: '',
  variation: '',
  createdAt: null,
  updatedAt: null,
};
