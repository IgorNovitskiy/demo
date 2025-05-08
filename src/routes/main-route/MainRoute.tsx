import { FC } from 'react';

import { Routes, Route } from "react-router";

import { MAIN_ROUTES } from '../../constants/routes';
import { Cocktails } from '../../pages/cocktails';

const MainRoute: FC = () => {
  return (
    <Routes>
      {MAIN_ROUTES.map((route) => (
        <Route key={route.name} path={route.path} element={<Cocktails code={route.path} />} />
      ))}
    </Routes>
  )
}

export default MainRoute;
