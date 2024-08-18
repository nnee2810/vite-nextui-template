import ReactDOM from "react-dom/client"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-quartz.css"
import "styles/index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import "simplebar-react/dist/simplebar.min.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
