import { Icon } from "@iconify/react"
import {
  Button,
  Checkbox,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react"
import { GridApi } from "ag-grid-community"
import { useCallback, useEffect, useState } from "react"

interface ManageColumnsProps<T> {
  gridApi: GridApi<T>
}

export default function ManageColumns<T = unknown>({
  gridApi,
}: ManageColumnsProps<T>) {
  const [columns, setColumns] = useState<
    { id: string; name: string; isVisible: boolean }[]
  >([])

  const fetchColumns = useCallback(() => {
    setColumns(
      gridApi.getColumns()?.map((column) => ({
        id: column.getId(),
        name: column.getColDef().headerName || "",
        isVisible: gridApi.getColumn(column.getId())?.isVisible() || false,
      })) || [],
    )
  }, [gridApi, setColumns])

  useEffect(() => {
    fetchColumns()
  }, [fetchColumns])

  return (
    <div className="flex justify-end pb-2">
      <Dropdown
        closeOnSelect={false}
        onOpenChange={(isOpen) => isOpen && fetchColumns()}
      >
        <DropdownTrigger>
          <Button
            startContent={<Icon icon="charm:stack" className="text-lg" />}
          >
            Manage columns
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="dropdown-manage-columns">
          {columns.map((column) => (
            <DropdownItem
              className="cursor-default data-[hover=true]:bg-transparent"
              textValue={column.name}
              key={column.id}
            >
              <Checkbox
                isSelected={column.isVisible}
                classNames={{
                  label: "text-md",
                }}
                onValueChange={(isSelected: boolean) => {
                  gridApi.setColumnsVisible([column.id], isSelected)
                  fetchColumns()
                }}
              >
                {column.name}
              </Checkbox>
            </DropdownItem>
          )) || []}
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
