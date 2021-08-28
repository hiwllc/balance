import { Button } from '@chakra-ui/button'
import { HStack } from '@chakra-ui/layout'
import { Search } from './search'

export const Filter = () => (
  <HStack spacing={7} py={10}>
    <Button variant="active">Tudo</Button>
    <Button>Entrada</Button>
    <Button>Saida</Button>
    <Button>Futuro</Button>

    <Search />
  </HStack>
)
