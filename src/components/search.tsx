import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { ReactComponent as SearchIcon } from '../icons/search.svg'

export const Search = () => {
  return (
    <InputGroup flex={1}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon />
      </InputLeftElement>
      <Input placeholder="Pesquisar" />
    </InputGroup>
  )
}
