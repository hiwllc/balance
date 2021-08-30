import type { AppProps } from 'next/app'
import { Grid } from '@chakra-ui/react'
import { Header } from '../components/header'
import { AppProviders } from '../components/providers'

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <Header />

      <Grid
        as="main"
        px={4}
        pb={10}
        gridTemplateColumns="1fr min(1035px, 100%) 1fr"
        sx={{ '& > *': { gridColumn: 2 } }}
      >
        <Component {...pageProps} />
      </Grid>
    </AppProviders>
  )
}

export default App
