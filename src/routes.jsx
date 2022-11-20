import React from "react"
import { Outlet, ReactLocation, Router } from "@tanstack/react-location"
import Home from "./pages/Home.jsx"
import SignIn from "./pages/auth/SignIn"
import SignUp from "./pages/auth/SignUp"

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <SignIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]

const location = new ReactLocation()

const AppRouter = () => {
  return (
    <div className="hstack w-100 h-100 align-center">
      <Router routes={routes} location={location}>
        <Outlet />
      </Router>
    </div>
  )
}

export default AppRouter
