import React, { FC } from 'react';
import paths from 'routes/routes';
import { BookCard } from 'components/molecules/card/BookCard';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';

const App: FC = () => (
  <div>
    <Switch>
      <Route path={paths.home} component={BookCard} />
      <Route path={paths.book} />
      <Redirect to={paths.home} />
    </Switch>
  </div>
);

export default App;
