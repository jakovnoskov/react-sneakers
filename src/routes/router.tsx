import React, { Suspense } from 'react'

import { Root } from './Root'
import Catalog from './Catalog'
//import Detail from './Detail'
//import Favorites from './Favorites'
//import Orders from './Orders'
//import NotFound from './NotFound'
//import ErrorPage from './ErrorPage'
import { createHashRouter } from 'react-router-dom'
import GlobalLoader from '../components/GlobalLoader'

const ErrorPage: React.FC = React.lazy(() => import(/*webpackChunkName: "ErrorPage"*/'./ErrorPage'))
const NotFound: React.FC = React.lazy(() => import(/*webpackChunkName: "NotFound"*/'./NotFound'))

const Detail: React.FC = React.lazy(() => import(/*webpackChunkName: "Detail"*/'./Detail'))
const Favorites: React.FC = React.lazy(() => import(/*webpackChunkName: "Favorites"*/'./Favorites'))
const Orders: React.FC = React.lazy(() => import(/*webpackChunkName: "Orders"*/'./Orders'))



const router = createHashRouter([
  {
    path: '',
    element: <Suspense fallback={<GlobalLoader />}><Root /></Suspense>,
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