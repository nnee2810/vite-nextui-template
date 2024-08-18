import NavbarItem from "components/layout/app/navbar/NavbarItem.tsx"
import { AppRoute } from "routes.tsx"
import { cn } from "utils/cn.ts"

export interface NavbarListProps {
  items: AppRoute[]
  isRoot?: boolean
}

export default function NavbarList({ items, isRoot }: NavbarListProps) {
  return (
    <div>
      {items
        ?.filter(({ showOnNavbar }) => showOnNavbar)
        .map((item, idx) => (
          <NavbarItem
            item={item}
            isRoot={isRoot}
            className={cn({
              "mt-1": !!idx && isRoot,
              "mt-2": !isRoot,
            })}
            key={idx}
          />
        ))}
    </div>
  )
}
