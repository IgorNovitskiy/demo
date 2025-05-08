import { FC } from 'react';
import { BrowserRouter } from "react-router";

import { MainLayout } from './layouts/main';
import { MainRoute } from './routes/main-route';

import classes from './app.module.scss';

const App: FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <div className={classes.page}>
          <MainRoute />
        </div>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
