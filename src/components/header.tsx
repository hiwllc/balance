import { Box, Text } from '@chakra-ui/react'

export const Header = () => (
  <Box as="header" px={4} py={6} borderBottomWidth="1px" borderBottomColor="grays.200">
    <Text color="grays.500" fontSize="xl" fontWeight="bold">Extrato</Text>
  </Box>
)
