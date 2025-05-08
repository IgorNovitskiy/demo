import { FC } from 'react';

import { Routes, Route, Navigate } from "react-router";

import { Cocktails } from '../../pages/cocktails';
import { NotFound } from '../../pages/not-found';

import { MAIN_ROUTES } from '../../constants/routes';

const MainRoute: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={MAIN_ROUTES[0].path} />} />

      {MAIN_ROUTES.map((route) => (
        <Route key={route.name} path={route.path} element={<Cocktails code={route.path} />} />
      ))}

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default MainRoute;
