import { Icon } from "@iconify-icon/react/dist/iconify.mjs"
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react"
import { SortDirection } from "ag-grid-community"
import { CustomHeaderProps } from "ag-grid-react"
import { useState } from "react"
import { cn } from "utils/cn"

export default function TableHeader({
  api,
  column,
  ...props
}: CustomHeaderProps & { openManageColumns(): void }) {
  const [sortDirection, setSortDirection] = useState<SortDirection>(null)

  return (
    <div className="flex w-full">
      <div
        data-ref="eLabel"
        className="ag-header-cell-label"
        role="presentation"
      >
        <span data-ref="eText" className="ag-header-cell-text">
          {props.displayName}
        </span>
      </div>
      <div className="flex">
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button isIconOnly variant="light" size="sm">
              <Icon icon="mingcute:search-line" className="text-lg" />
            </Button>
          </PopoverTrigger>
          <PopoverContent aria-label="popover-search" className="p-0">
            <Input
              placeholder="Search anything..."
              startContent={<Icon icon="mingcute:search-line" />}
            />
          </PopoverContent>
        </Popover>
        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly variant="light" size="sm">
              <Icon icon="mdi:more-vert" className="text-lg" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="dropdown-more">
            <DropdownItem
              startContent={
                <Icon icon="mingcute:arrow-up-line" className="text-lg" />
              }
              onClick={() => setSortDirection("asc")}
              className={cn({ hidden: sortDirection === "asc" })}
              key="sort-asc"
            >
              Sort ascending
            </DropdownItem>
            <DropdownItem
              startContent={
                <Icon icon="mingcute:arrow-down-line" className="text-lg" />
              }
              className={cn({ hidden: sortDirection === "desc" })}
              onClick={() => setSortDirection("desc")}
              showDivider={sortDirection !== "asc"}
              key="sort-desc"
            >
              Sort descending
            </DropdownItem>
            <DropdownItem
              startContent={
                <Icon icon="mingcute:close-line" className="text-lg" />
              }
              showDivider
              className={cn({ hidden: !sortDirection })}
              onClick={() => setSortDirection(null)}
              key="clear-sort"
            >
              Clear sort
            </DropdownItem>
            <DropdownItem
              startContent={
                <Icon icon="lucide:pin" className="rotate-[24deg] text-lg" />
              }
              className={cn({ hidden: column.isPinnedLeft() })}
              onClick={() => api.setColumnsPinned([column.getId()], "left")}
            >
              Pin left
            </DropdownItem>
            <DropdownItem
              startContent={
                <Icon icon="lucide:pin" className="-rotate-[24deg] text-lg" />
              }
              showDivider={!column.isPinnedLeft()}
              className={cn({ hidden: column.isPinnedRight() })}
              onClick={() => api.setColumnsPinned([column.getId()], "right")}
            >
              Pin right
            </DropdownItem>
            <DropdownItem
              startContent={<Icon icon="lucide:pin-off" className="text-lg" />}
              showDivider
              className={cn({ hidden: !column.isPinned() })}
              onClick={() => api.setColumnsPinned([column.getId()], null)}
            >
              Unpin
            </DropdownItem>
            <DropdownItem
              onClick={() => api.autoSizeColumns([column.getId()], false)}
            >
              Autosize this column
            </DropdownItem>
            <DropdownItem
              showDivider
              onClick={() => api.autoSizeAllColumns(false)}
            >
              Autosize all columns
            </DropdownItem>
            <DropdownItem
              startContent={<Icon icon="mdi:eye-off-outline" />}
              className="text-lg"
              onClick={() => api.setColumnsVisible([column.getId()], false)}
              key="hide-column"
            >
              Hide column
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  )
}
