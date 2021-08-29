import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { ReactComponent as SearchIcon } from '../icons/search.svg'

type Props = {
  onChange: (term: string) => void
}

export const Search = ({ onChange }: Props) => {
  return (
    <InputGroup flex={1}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon />
      </InputLeftElement>
      <Input
        placeholder="Pesquisar"
        onChange={event => onChange(event.target.value)}
      />
    </InputGroup>
  )
}
