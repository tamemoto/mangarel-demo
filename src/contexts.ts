import { createContext } from 'react';
import firebase from 'firebase';
import mangarelTheme from './theme';

type FirebaseContextValue = {
  db: firebase.firestore.Firestore | null;
};

export const FirebaseContext = createContext<FirebaseContextValue>({
  db: null,
});

export const ThemeContext = createContext(
  (null as unknown) as typeof mangarelTheme,
);
