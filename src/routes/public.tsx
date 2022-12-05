import React from 'react';
import { Route } from 'react-router-dom';

import { PATHS } from '@constants/routes';

const publicRoutes = PATHS.map(({ path, ...props }) => <Route key={path} path={path} {...props} />);

const PublicRoutes = () => {
  return <React.Fragment>{publicRoutes}</React.Fragment>;
};

export default PublicRoutes;
