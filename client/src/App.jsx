import WelcomePage from "./pages/Welcome/WelcomePage"
import HomePage from "./pages/Home/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import SignInPage from "./pages/SignIn/SignUpPage"
import LogInPage from "./pages/Login/LogInPage"
import { SwitchProvider } from "./switchLight"
import { useState } from "react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const [switchLight, setSwitchLight] = useState(false)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <WelcomePage />,
      errorElement: <NotFoundPage />
    },
    {
      path: '/signup',
      element: <SignInPage />
    },
    {
      path: '/login',
      element: <LogInPage />
    },
    {
      path: '/home',
      element: <HomePage />
    }
  ])

  return (
    <>
    <SwitchProvider.Provider value={{switchLight, setSwitchLight}}>
      <RouterProvider router={router} />
    </SwitchProvider.Provider>
    </>
  )
}

export default App
