import Root from './Root'
import Catalog from './Catalog'
import Detail from './Detail'
import Favorites from './Favorites'
import Orders from './Orders'
import NotFound from './NotFound'
import ErrorPage from './ErrorPage'
import {createHashRouter} from 'react-router-dom'

const router = createHashRouter([
  {
    path: '',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: '/',
        element: <Catalog />,
      },
      {
        path: 'catalog/:productId',
        element: <Detail />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
])

export default router