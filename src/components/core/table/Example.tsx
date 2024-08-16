import { ColDef, ColGroupDef } from "ag-grid-community"
import { useState } from "react"
import Table from "."

interface Row {
  make: string
  model: string
  price: number
  electric: boolean
}

export default function ExampleTable() {
  // Row Data: The data to be displayed.
  const [rowData] = useState<Row[]>([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
  ])

  // Column Definitions: Defines & controls grid columns.
  const [colDefs] = useState<(ColDef<Row> | ColGroupDef<Row>)[]>([
    {
      headerName: "Group",
      children: [
        { field: "make", headerName: "Make" },
        { field: "model", headerName: "Model" },
      ],
    },
    { field: "price", headerName: "Price" },
    { field: "electric", headerName: "Electric" },
    { field: "electric", headerName: "Electric" },
    { field: "electric", headerName: "Electric" },
    { field: "electric", headerName: "Electric" },
    { field: "electric", headerName: "Electric" },
    { field: "electric", headerName: "Electric" },
    { field: "electric", headerName: "Electric" },
    { field: "electric", headerName: "Electric" },
    { field: "electric", headerName: "Electric" },
    { field: "electric", headerName: "Electric" },
    { field: "electric", headerName: "Electric" },
    { field: "electric", headerName: "Electric" },
  ])

  // Container: Defines the grid's theme & dimensions.
  return (
    <div className="h-screen">
      <Table rowData={rowData} colDefs={colDefs} />
    </div>
  )
}
