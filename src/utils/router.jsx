import { createBrowserRouter, Outlet } from 'react-router-dom';

import NoAuthWhenLoggedIn from '../components/Router/NoAuthWhenLoggedIn';
import RequireAuth from '../components/Router/RequireAuth';
import MainPage from '../pages/MainPage';
import BackgroundPage from '../pages/Photo/BackgroundPage';
import BasicFramePage from '../pages/Photo/BasicFramePage';
import CustomPage from '../pages/Photo/CustomPage';
import EditPage from '../pages/Photo/EditPage';
import FilterPage from '../pages/Photo/FilterPage';
import FinalPage from '../pages/Photo/FinalPage';
import SelectPage from '../pages/Photo/SelectPage';
import AlbumPage from '../pages/User/AlbumPage';
import LoginPage from '../pages/User/LoginPage';
import RegisterPage from '../pages/User/RegisterPage';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/login',
    element: (
      <NoAuthWhenLoggedIn>
        <LoginPage />
      </NoAuthWhenLoggedIn>
    ),
  },
  {
    path: '/register',
    element: (
      <NoAuthWhenLoggedIn>
        <RegisterPage />
      </NoAuthWhenLoggedIn>
    ),
  },
  {
    path: '/album',
    element: (
      <RequireAuth>
        <AlbumPage />
      </RequireAuth>
    ),
  },
  {
    path: '/photo/',
    element: (
      <RequireAuth>
        <Outlet /> {/* 중첩된 경로들을 위한 Outlet */}
      </RequireAuth>
    ),
    children: [
      {
        path: 'basicFrame',
        element: <BasicFramePage />,
      },
      {
        path: 'select',
        element: <SelectPage />,
      },
      {
        path: 'background',
        element: <BackgroundPage />,
      },
      {
        path: 'filter',
        element: <FilterPage />,
      },
      {
        path: 'custom',
        element: <CustomPage />,
      },
      {
        path: 'final',
        element: <FinalPage />,
      },
      {
        path: 'edit',
        element: <EditPage />,
      },
    ],
  },
]);

export default routers;
