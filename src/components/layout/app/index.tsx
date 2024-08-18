import { Outlet } from "react-router-dom"
import Navbar from "./navbar"
import Breadcrumbs from "components/layout/app/Breadcrumbs.tsx"

export default function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[300px_auto]">
      <Navbar />
      <div className="bg-slate-100 px-8 py-4">
        <Breadcrumbs />
        <Outlet />
      </div>
    </div>
  )
}
