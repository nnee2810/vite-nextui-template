import { ReactNode } from "react"
import { Navigate, NonIndexRouteObject, useRoutes } from "react-router-dom"
import { homeRoute } from "./modules/home/route.tsx"
import AppLayout from "components/layout/app"

export type AppRoute = NonIndexRouteObject & {
  path: string
  name: string
  icon?: ReactNode
  showOnNavbar?: boolean
  children?: AppRoute[]
}

export const routes = [homeRoute]
export const navbarRoutes = { top: [...routes] }

function mapRoutes(routes: AppRoute[]): NonIndexRouteObject[] {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return routes.map(({ name, icon, showOnNavbar, children, ...rest }) => ({
    ...rest,
    children: children ? mapRoutes(children) : [],
  }))
}

export default function Routes() {
  return useRoutes([
    {
      path: "",
      Component: AppLayout,
      children: mapRoutes(routes),
    },
    {
      path: "*",
      element: <Navigate to="" />,
    },
  ])
}
