import { FC } from 'react';
import { Link } from 'react-router';

import classes from './error-page.module.scss';

const ErrorPage: FC = () => {
  return (
    <div className={classes.container}>
      <h3>Something went wrong</h3>

      <Link to="/" className={classes.link}>Return to main page</Link>
    </div>
  );
};

export default ErrorPage;
