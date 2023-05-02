import React, { lazy } from 'react';
import PublicRoute from 'hoc/PublicRoute';
import { ROUTE } from 'constant/route.constant';

const SignUp = lazy(() => import('pages/SignUp'));
const UserBoard = lazy(() => import('pages/UserBoard'));
const TeamBoard = lazy(() => import('pages/TeamBoard'));
const UserPost = lazy(() => import('pages/UserPost'));
const TeamPost = lazy(() => import('pages/TeamPost'));
const LoginRoute = lazy(() => import('./LoginRoute'));

const routesWithHeader = [
  {
    path: ROUTE.USER,
    element: UserBoard,
    restricted: false,
  },
  {
    path: ROUTE.TEAM,
    element: TeamBoard,
    restricted: false,
  },
  {
    path: `${ROUTE.USER}/:userId`,
    element: UserPost,
    restricted: false,
  },
  {
    path: `${ROUTE.TEAM}/:teamId`,
    element: TeamPost,
    restricted: false,
  },
];

const routesWithFullPage = [
  {
    path: ROUTE.SIGN_UP,
    element: SignUp,
    restricted: true,
  },
  {
    path: ROUTE.LOGIN + ROUTE.ALL,
    element: LoginRoute,
    restricted: true,
  },
];

export const publicRoutesWithHeader = routesWithHeader.map(({ path, element, restricted }) => ({
  path,
  element: <PublicRoute Component={element} restricted={restricted} />,
}));

export const publicRoutesWithFullPage = routesWithFullPage.map(({ path, element, restricted }) => ({
  path,
  element: <PublicRoute Component={element} restricted={restricted} />,
}));
