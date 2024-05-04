import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Courses, { loader as coursesLoader } from './pages/Courses';
import Course, { loader as courseLoader } from './pages/Course';
import Cart from './pages/Cart';
import CreateOrder, { action as careteOrderAction } from './pages/CreateOrder';
import Blog, { loader as blogPostsLoader } from './pages/Blog';
import StaticPages from './pages/StaticPages';
import CheckoutPage, { action as checkoutAction } from './pages/Checkout';
import OrderRecievedPage, {
  loader as orderRecievedLoader,
} from './pages/OrderRecieved';
import LoginPage from './pages/Login';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import PageNotFound from './pages/PageNotFound';
import {
  TERMS_OF_USE_PAGE,
  LOREM_CONTENT,
  COURSES_PAGE,
  BLOG_PAGE,
  HOME_PAGE,
  ORDER_RECIEVED_PAGE,
  // ORDER_PAGE,
  CART_ADDRESS,
  NEW_ORDER,
  CHECKOUT_PAGE,
  LOGIN_PAGE,
} from './utils/constants';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: HOME_PAGE,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: '/order-received/:orderId',
        element: <OrderRecievedPage />,
        errorElement: <Error />,
        loader: orderRecievedLoader,
      },
      {
        path: CHECKOUT_PAGE,
        element: <CheckoutPage />,
        errorElement: <Error />,
        action: checkoutAction,
      },
      {
        path: LOGIN_PAGE,
        element: <LoginPage />,
      },
      {
        path: `${COURSES_PAGE}/:courseId`,
        element: <Course />,
        loader: courseLoader,
        errorElement: <Error />,
      },
      {
        path: COURSES_PAGE,
        element: <Courses />,
        loader: coursesLoader,
        errorElement: <Error />,
      },
      {
        path: CART_ADDRESS,
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: NEW_ORDER,
        element: <CreateOrder />,
        action: careteOrderAction,
        errorElement: <Error />,
      },
      {
        path: BLOG_PAGE,
        element: <Blog />,
        loader: blogPostsLoader,
        errorElement: <Error />,
      },
      {
        path: TERMS_OF_USE_PAGE,
        element: <StaticPages title="Terms of Use" content={LOREM_CONTENT} />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;