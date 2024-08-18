import { cn } from "utils/cn.ts"
import { Collapse } from "components/core/animation/Collapse.tsx"
import NavbarList from "components/layout/app/navbar/NavbarList.tsx"
import { useLocation, useNavigate } from "react-router-dom"
import { AppRoute } from "routes.tsx"
import { HTMLAttributes, useCallback, useMemo } from "react"
import { useNavbar } from "store/useNavbar.tsx"
import { Icon } from "@iconify/react"

interface NavbarItemProps extends HTMLAttributes<HTMLDivElement> {
  item: AppRoute
  isRoot?: boolean
}

export default function NavbarItem({
  item,
  isRoot,
  className,
  ...props
}: NavbarItemProps) {
  const navigate = useNavigate(),
    location = useLocation()
  const {
    expandedPaths,
    updatedAt,
    addExpandedPath,
    removeExpandedPath,
    clearExpandedPaths,
  } = useNavbar()

  const isActive = useMemo(
    () => location.pathname.startsWith(item.path),
    [item.path, location.pathname],
  )
  const isExpanded = useMemo(
    () => expandedPaths.has(item.path),
    [item.path, expandedPaths, updatedAt],
  )

  const handleClick = useCallback(() => {
    if (!item.children?.length) {
      navigate(item.path)
      clearExpandedPaths()

      const paths = item.path.split("/")
      for (let i = 0; i < paths.length - 2; i++) {
        addExpandedPath(paths.slice(0, i + 2).join("/"))
      }
    }

    if (isExpanded) return removeExpandedPath(item.path)
    addExpandedPath(item.path)
  }, [
    item,
    navigate,
    isExpanded,
    addExpandedPath,
    removeExpandedPath,
    clearExpandedPaths,
  ])

  return (
    <>
      <div
        {...props}
        className={cn(
          "group relative cursor-pointer select-none ",
          isActive ? "text-primary" : "text-slate-400",
          isRoot ? "p-3" : "px-3 py-2",
          className,
        )}
        onClick={handleClick}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 text-xl">{item.icon}</div>
            <div>{item.name}</div>
          </div>
          {!!item.children?.length && (
            <button className="inline-flex p-1">
              <Icon
                icon="lucide:chevron-down"
                className={cn("w-4 transition-all", {
                  "rotate-180": isExpanded,
                })}
              />
            </button>
          )}
        </div>
        {(!!item.Component || !!item.element) && (
          <div
            className={cn(
              "absolute inset-0 z-[-2]  rounded-lg",
              isActive && isRoot
                ? "bg-primary-100/50"
                : "group-hover:bg-gray-100",
            )}
          ></div>
        )}
      </div>
      <Collapse isOpen={isExpanded}>
        {item.children && <NavbarList items={item.children} />}
      </Collapse>
    </>
  )
}
