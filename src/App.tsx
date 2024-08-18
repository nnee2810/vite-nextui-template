import { NextUIProvider } from "@nextui-org/react"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Suspense } from "react"
import { useNavigate } from "react-router-dom"
import { Toaster } from "sonner"
import PageLoading from "./components/common/PageLoading"
import { queryClient } from "./configs/queryClient"
import Routes from "./routes"

export default function App() {
  const navigate = useNavigate()

  return (
    <NextUIProvider navigate={navigate}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<PageLoading />}>
          <Routes />
        </Suspense>
        <ReactQueryDevtools />
        <Toaster position="top-right" richColors />
      </QueryClientProvider>
    </NextUIProvider>
  )
}
