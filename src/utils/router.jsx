import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import RegisterPage from '../pages/RegisterPage';
import FilterPage from '../pages/FilterPage';

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
    path: '/photo/filter',
    element: <FilterPage />,
  },
]);

export default routers;
