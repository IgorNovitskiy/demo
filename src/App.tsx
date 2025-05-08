import { FC } from 'react';
import { BrowserRouter } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { MainLayout } from './layouts/main';
import { ErrorPage } from './pages/error-page';
import { MainRoute } from './routes/main-route';

import classes from './app.module.scss';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ErrorBoundary fallback={<ErrorPage />}>
          <MainLayout>
            <div className={classes.page}>
              <MainRoute />
            </div>
          </MainLayout>
        </ErrorBoundary>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
