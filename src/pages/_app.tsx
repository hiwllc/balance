import type { AppProps } from 'next/app'
import { ChakraProvider, Grid } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { theme } from '../theme'
import { Header } from '../components/header'

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

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Header />

        <Grid
          as="main"
          px={4}
          gridTemplateColumns="1fr min(1035px, 100%) 1fr"
          sx={{ '& > *': { gridColumn: 2 } }}
        >
          <Component {...pageProps} />
        </Grid>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
