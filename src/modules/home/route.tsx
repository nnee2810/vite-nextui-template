import { AppRoute } from "../../routes.tsx"
import { lazy } from "react"

const HomePage = lazy(() => import("./pages/HomePage"))

export const homeRoute: AppRoute = {
  path: "/",
  name: "Home",
  Component: HomePage,
}
