import firebase from 'firebase';

export type Publisher = {
  id?: string;
  name: string;
  nameReading: string | null;
  website: string | null;
  createdAt: firebase.firestore.Timestamp | null;
  updatedAt: firebase.firestore.Timestamp | null;
};

export const blankPublisher: Publisher = {
  name: '',
  nameReading: null,
  website: null,
  createdAt: null,
  updatedAt: null,
};
