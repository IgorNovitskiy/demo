import { FC } from 'react';
import { Link } from 'react-router';

import classes from './not-found.module.scss';

const NotFound: FC = () => {
  return (
    <div className={classes.container}>
      <h3>Page not found</h3>

      <div>
        <span className={classes.number}>4</span>
        <span className={classes.number}>0</span>
        <span className={classes.number}>4</span>
      </div>


      <Link to="/" className={classes.link}>Return to main page</Link>
    </div>
  );
};

export default NotFound;
