import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/app';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebaseConfig from './firebase-config';
import 'semantic-ui-css/semantic.min.css';
import FirebaseApp from './FirebaseApp';
import { ThemeContext } from './contexts';
import mangarelTheme from './theme';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <FirebaseApp>
      <ThemeContext.Provider value={mangarelTheme}>
        <App />
      </ThemeContext.Provider>
    </FirebaseApp>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
