import WelcomePage from "./pages/Welcome/WelcomePage"
import HomePage from "./pages/Home/HomePage"
import NotFoundPage from "./pages/NotFoundPage"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <WelcomePage />,
      errorElement: <NotFoundPage />
    },
    {
      path: '/home',
      element: <HomePage />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
