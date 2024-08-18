import { AppRoute } from "routes.tsx"
import { lazy } from "react"
import { Icon } from "@iconify/react"

const HomePage = lazy(() => import("./pages/HomePage"))

export const homeRoute: AppRoute = {
  path: "/dashboard",
  name: "Home",
  icon: <Icon icon="lucide:home" />,
  showOnNavbar: true,
  Component: HomePage,
  children: [
    {
      path: "/dashboard/ecommerce",
      name: "Ecommerce",
      showOnNavbar: true,
      Component: HomePage,
    },
    {
      path: "/dashboard/analytics",
      name: "Analytics",
      showOnNavbar: true,
      Component: HomePage,
    },
  ],
}
