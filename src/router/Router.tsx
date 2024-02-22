import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Tasks from '../views/Tasks/Tasks';
import Error from '../views/Error/Error';
import Home from '../views/Home/Home';
import EditTask from '../views/EditTask/EditTask';

type Props = {};

const Router = (props: Props) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar></NavBar>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/tasks',
          element: <Tasks></Tasks>,
        },
        {
          path: '/tasks/:id',
          element: <EditTask></EditTask>,
        },
        {
          path: '/home',
          element: <Home></Home>,
        },
        {
          path: '/',
          element: <Navigate to={'/home'}></Navigate>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
