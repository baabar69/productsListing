import React, { Suspense } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import PublicRoutes from '@routes/public';

import '@styles/shared.less';
import 'react-toastify/dist/ReactToastify.css';

export default () => (
  <>
    <ToastContainer theme="colored" autoClose={3000} position="top-right" />
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<div />}>
          <PublicRoutes />
          {/* <Route component={NotFound} /> */}
        </Suspense>
      </Switch>
    </BrowserRouter>
  </>
);
