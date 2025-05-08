import { FC } from 'react';

import { Routes, Route } from "react-router";

import { MAIN_ROUTES } from '../../constants/routes';
import { Cocktail } from '../../pages/cocktail';

const MainRoute: FC = () => {
  return (
    <Routes>
      {MAIN_ROUTES.map((route) => (
        <Route key={route.name} path={route.path} element={<Cocktail code={route.path} />} />
      ))}
    </Routes>
  )
}

export default MainRoute;
