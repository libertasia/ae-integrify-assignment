import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoute } from './const';
import NotFoundScreen from './components/not-found-screen/not-found-screen';
import MainScreen from './components/main-screen/main-screen';
import UserScreen from './components/user-screen/user-screen';
import './scss/style.scss';

const App = () => {
  return (
    <Routes>
      <Route path={AppRoute.ROOT} element={<MainScreen />} />
      <Route path={AppRoute.USER_DETAIL} element={<UserScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  );
};

export default App;
