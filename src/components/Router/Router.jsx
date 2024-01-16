import PageWrapper from '../PageWrapper/PageWrapper'
import MainPage from '../MainPage/MainPage'
// import RouteRedirect from './RouteRedirect'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ShopPage from '../ShopPage/ShopPage'

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageWrapper />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: '/shop',
          element: <ShopPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default Router
