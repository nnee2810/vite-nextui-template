import { QueryClient, keepPreviousData } from "@tanstack/react-query"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
      placeholderData: keepPreviousData,
    },
  },
})
