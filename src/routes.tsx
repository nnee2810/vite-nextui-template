import { navPaths } from "constants/nav"
import { Navigate, useRoutes } from "react-router-dom"

export default function Routes() {
  const element = useRoutes([
    {
      path: "*",
      element: <Navigate to={navPaths.home} />,
    },
  ])
  return element
}
