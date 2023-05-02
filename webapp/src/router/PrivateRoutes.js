import React, { lazy } from 'react';
import { ROUTE } from 'constant/route.constant';
import PrivateRoute from 'hoc/PrivateRoute';

const EditUserProfile = lazy(() => import('pages/EditUserProfile'));
const MyList = lazy(() => import('pages/MyList'));
const NewTeamPost = lazy(() => import('pages/NewTeamPost'));
const MyPost = lazy(() => import('pages/MyPost'));
const EditTeamPost = lazy(() => import('pages/EditTeamPost'));

const routes = [
  {
    path: ROUTE.PROFILE,
    element: EditUserProfile,
    restricted: true,
  },
  {
    path: ROUTE.MY_LIST,
    element: MyList,
    restricted: true,
  },
  {
    path: ROUTE.NEW_POST,
    element: NewTeamPost,
    restricted: false,
  },
  {
    path: ROUTE.MY_POST,
    element: MyPost,
    restricted: false,
  },
  {
    path: `${ROUTE.TEAM_EDIT}/:teamId`,
    element: EditTeamPost,
    restricted: false,
  },
];

export const privateRoutesWithHeader = routes.map(({ path, element, restricted }) => ({
  path,
  element: <PrivateRoute Component={element} restricted={restricted} />,
}));
