import { ColDef, ColGroupDef, GridApi, GridReadyEvent } from "ag-grid-community"
import { AgGridReact } from "ag-grid-react"
import { useState } from "react"
import ManageColumns from "./ManageColumns"
import TableHeader from "./TableHeader"

interface TableProps<T> {
  rowData: T[]
  colDefs: (ColDef<T> | ColGroupDef<T>)[]
}

function mapColumnDefs<T = unknown>(
  colDefs: (ColDef<T> | ColGroupDef<T>)[],
): (ColDef<T, any> | ColGroupDef<T>)[] {
  return colDefs.map((column) => ({
    ...column,
    headerComponent: "field" in column ? TableHeader : undefined,
    children: "children" in column ? mapColumnDefs(column.children) : undefined,
  }))
}

export default function Table<T = unknown>({
  rowData,
  colDefs,
}: TableProps<T>) {
  const [gridApi, setGridApi] = useState<GridApi<T>>()

  const handleGridReady = (e: GridReadyEvent<T>) => {
    setGridApi(e.api)
  }

  return (
    <div className="ag-theme-quartz h-[500px]">
      {gridApi && <ManageColumns gridApi={gridApi} />}
      <AgGridReact
        rowData={rowData}
        columnDefs={mapColumnDefs(colDefs)}
        onGridReady={handleGridReady}
      />
    </div>
  )
}
