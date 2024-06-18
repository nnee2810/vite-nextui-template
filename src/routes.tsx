import { navPaths } from "constants/nav"
import { lazy } from "react"
import { Navigate, useRoutes } from "react-router-dom"

const HomePage = lazy(() => import("modules/home/pages/HomePage"))

export default function Routes() {
  const element = useRoutes([
    {
      path: "",
      Component: HomePage,
    },
    {
      path: "*",
      element: <Navigate to={navPaths.home} />,
    },
  ])
  return element
}
