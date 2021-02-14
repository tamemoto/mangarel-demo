import React, { FC, useContext } from 'react';
import paths from 'routes/routes';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';

import Book from 'components/organisms/Book';
import Home from 'components/organisms/Home';
import Signin from 'components/organisms/Signin';
import NavigationBar from './components/molecules/menubar/NavigationBar';
import Spacer from './components/atoms/Spacer';
import Search from './components/organisms/Search';
import { UserContext } from './contexts';

const App: FC = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <NavigationBar />
      <Spacer />
      <Switch>
        <Route path={paths.book} component={Book} />
        <Route path={paths.home} component={Home} exact />
        <Route path={paths.search} component={Search} />
        {!user && <Route path={paths.signin} component={Signin} />}
        <Redirect to={paths.home} />
      </Switch>
    </div>
  );
};

export default App;
