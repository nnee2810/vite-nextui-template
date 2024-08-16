import { useMemo } from "react"
import { BreadcrumbItem, Breadcrumbs as B } from "@nextui-org/react"
import { Link, useLocation } from "react-router-dom"
import { routes } from "routes.tsx"

export default function Breadcrumbs() {
  const location = useLocation()
  const breadcrumbItems = useMemo(() => {
    const paths = location.pathname.split("/"),
      result: { path: string; name: string }[] = []
    let currentRoute = routes

    for (let i = 0; i < paths.length; i++) {
      const route = currentRoute.find(
        (route) => route.path === paths.slice(0, i + 2).join("/"),
      )
      if (!route) break

      result.push({ path: route.path, name: route.name })

      if (!route.children) break
      currentRoute = [...route.children]
    }

    return result
  }, [location.pathname])

  return (
    !!breadcrumbItems.length && (
      <div className="mb-4 rounded-xl bg-white px-4 py-3">
        <B>
          {breadcrumbItems.map(({ path, name }) => (
            <BreadcrumbItem key={path}>
              <Link to={path}>{name}</Link>
            </BreadcrumbItem>
          ))}
        </B>
      </div>
    )
  )
}
