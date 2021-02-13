import React, { FC } from 'react';
import paths from 'routes/routes';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';

import Book from 'components/organisms/Book';
import Home from 'components/organisms/Home';
import NavigationBar from './components/molecules/menubar/NavigationBar';
import Spacer from './components/atoms/Spacer';

const App: FC = () => (
  <div>
    <NavigationBar />
    <Spacer />
    <Switch>
      <Route path={paths.book} component={Book} />
      <Route path={paths.home} component={Home} exact />
      <Redirect to={paths.home} />
    </Switch>
  </div>
);

export default App;
