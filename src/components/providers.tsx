import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { theme } from '../theme'

type AppProvidersProps = {
  children: ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ChakraProvider>
  )
}
