import {createBrowserRouter} from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Collection from '../pages/Collection';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import AdminDashboard from '../pages/protected/AdminDashboard';
import AdminLayout from '../layout/AdminLayout';
import ListItems from '../pages/protected/ListItems';
import AddItems from '../pages/protected/AddItems';
import Orders from '../pages/protected/Orders';
import ManagerDashboard from '../pages/protected/ManagerDashboard';
import AdminLogin from '../components/admin-panel/AdminLogin';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
      {
        path: '/collection',
        element: <Collection />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
  // ADMIN PANEL
  {
    path: '/dashboard',
    element: <AdminLayout />,
    children: [
      {
        path: "login",
        element: <AdminLogin />
      },
      {
        path: 'admin',
        element: <AdminDashboard />,
        children: [
          {
            path: 'add-items',
            element: <AddItems />,
          },
          {
            path: 'list-items',
            element: <ListItems />,
          },
          {
            path: 'orders',
            element: <Orders />,
          },
        ],
      },
      // When you add roles please restrict actions for manager
      {
        path: 'manager',
        element: <ManagerDashboard />,
        children: [
          {
            path: 'add-items',
            element: <AddItems />,
          },
          {
            path: 'list-items',
            element: <ListItems />,
          },
          {
            path: 'orders',
            element: <Orders />,
          },
        ],
      },
    ],
  },
]);
