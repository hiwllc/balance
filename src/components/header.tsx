import { Grid, Text } from '@chakra-ui/react'

export const Header = () => (
  <Grid
    as="header"
    px={4}
    py={6}
    borderBottomWidth="1px"
    borderBottomColor="grays.200"
    gridTemplateColumns="1fr min(1035px, 100%) 1fr"
  >
    <Text color="grays.500" fontSize="xl" fontWeight="bold" gridColumn={2}>
      Extrato
    </Text>
  </Grid>
)
