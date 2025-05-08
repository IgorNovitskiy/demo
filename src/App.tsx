import { FC } from 'react';
import { BrowserRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { MainLayout } from './layouts/main';
import { MainRoute } from './routes/main-route';

import classes from './app.module.scss';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MainLayout>
          <div className={classes.page}>
            <MainRoute />
          </div>
        </MainLayout>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
