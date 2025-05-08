import { FC, ReactNode } from 'react';

import { Sidebar } from '../../components/sidebar';

import classes from './mainLayout.module.scss';

type MainLayoutProps = {
  children?: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={classes.container}>
      <Sidebar />
      {children}
    </div>
  );
};

export default MainLayout;
