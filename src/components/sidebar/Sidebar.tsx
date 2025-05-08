import { FC } from 'react';
import { NavLink } from 'react-router';

import { MAIN_ROUTES } from '../../constants/routes';

import classes from './sidebar.module.scss';

const Sidebar: FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.navigation}>
        {MAIN_ROUTES.map(route => (
          <NavLink key={route.name} to={route.path} className={classes.link}>
            {route.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
