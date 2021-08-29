import { Button } from '@chakra-ui/button'
import { HStack } from '@chakra-ui/layout'
import { Filter as TypeFilter } from '../types'
import { Search } from './search'

type Props = {
  onTypeChange: (value: TypeFilter) => void
  filter: TypeFilter
}

export const Filter = ({ onTypeChange, filter }: Props) => (
  <HStack spacing={7} py={10}>
    <Button
      onClick={() => onTypeChange('all')}
      variant={filter === 'all' ? 'active' : 'ghost'}
    >
      Tudo
    </Button>
    <Button
      onClick={() => onTypeChange('income')}
      variant={filter === 'income' ? 'active' : 'ghost'}
    >
      Entrada
    </Button>
    <Button
      onClick={() => onTypeChange('outcome')}
      variant={filter === 'outcome' ? 'active' : 'ghost'}
    >
      Saida
    </Button>
    <Button
      onClick={() => onTypeChange('future')}
      variant={filter === 'future' ? 'active' : 'ghost'}
    >
      Futuro
    </Button>

    <Search />
  </HStack>
)
