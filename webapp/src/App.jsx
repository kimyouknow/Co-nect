import Spinner from 'components/Common/Loader/Spinner';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from 'router';

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner withLogo isFullPage />}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}
