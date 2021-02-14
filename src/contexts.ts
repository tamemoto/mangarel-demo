import { createContext } from 'react';
import firebase from 'firebase';
import mangarelTheme from './theme';
import { User } from './services/mangarel/models/user';

type FirebaseContextValue = {
  auth: firebase.auth.Auth | null;
  db: firebase.firestore.Firestore | null;
};

export const FirebaseContext = createContext<FirebaseContextValue>({
  auth: null,
  db: null,
});

type UserContextValue = {
  user: User | null;
  credential: firebase.auth.UserCredential | null;
  setCredential: (credential: firebase.auth.UserCredential) => void;
};

export const UserContext = createContext<UserContextValue>({
  user: null,
  credential: null,
  setCredential: () => undefined,
});
export const ThemeContext = createContext(
  (null as unknown) as typeof mangarelTheme,
);
