import type { AppProps } from 'next/app'
import { ChakraProvider, Grid } from '@chakra-ui/react'
import { theme } from '../theme'
import { Header } from '../components/header'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />

      <Grid
        as="main"
        py={10}
        px={4}
        gridTemplateColumns="1fr min(1035px, 100%) 1fr"
        sx={{ '& > *': { gridColumn: 2 } }}
      >
        <Component {...pageProps} />
      </Grid>
    </ChakraProvider>
  )
}

export default App
