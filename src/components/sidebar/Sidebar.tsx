import { FC, useState } from 'react';
import { NavLink } from 'react-router';

import { MAIN_ROUTES } from '../../constants/routes';

import classes from './sidebar.module.scss';

const Sidebar: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={classes.container}>
      <label htmlFor="toggle" className={classes.burger} onClick={() => setIsExpanded(!isExpanded)} />
      <input type="checkbox" checked={isExpanded} id="toggle" name="toggle" className={classes.toggle}></input>

      <div className={classes.navigation}>
        {MAIN_ROUTES.map(route => (
          <NavLink key={route.name} to={route.path} className={classes.link} onClick={() => setIsExpanded(false)}>
            {route.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
