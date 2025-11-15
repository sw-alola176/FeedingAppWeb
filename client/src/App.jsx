import WelcomePage from "./pages/Welcome/WelcomePage"
import HomePage from "./pages/Home/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import SignInPage from "./pages/SignIn/SignUpPage"
import LogInPage from "./pages/Login/LogInPage"
import SettingsPage from "./pages/Settings/settingsPage"
import HistoryPage from "./pages/History/HistoryPage"
import { SwitchProvider } from "./components/switchLight"
import { useState } from "react"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ForgotPasswordPage from "./pages/ForgotPassword/ForgotPasswordPage"

function App() {

  const [switchLight, setSwitchLight] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

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
    },
    {
      path: '/settings',
      element: <SettingsPage />
    },
    {
      path: '/forgot',
      element: <ForgotPasswordPage />
    },
    {
      path: '/history',
      element: <HistoryPage />
    }
  ])

  return (
    <>
    <SwitchProvider.Provider value={{switchLight, setSwitchLight, showMenu, setShowMenu}}>
      <RouterProvider router={router} />
    </SwitchProvider.Provider>
    </>
  )
}

export default App
