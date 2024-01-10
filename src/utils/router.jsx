import { createBrowserRouter } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import BackgroundPage from '../pages/Photo/BackgroundPage';
import CustomPage from '../pages/Photo/CustomPage';
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
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/album',
    element: <AlbumPage />,
  },
  {
    path: '/photo/',
    children: [
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
    ],
  },
]);

export default routers;
