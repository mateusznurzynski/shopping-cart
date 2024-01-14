import PageWrapper from '../PageWrapper/PageWrapper'
// import RouteRedirect from './RouteRedirect'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageWrapper />,
      children: [],
    },
  ])

  return <RouterProvider router={router} />
}

export default Router
