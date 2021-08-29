import { Filter } from '../components/filter'
import { Table } from '../components/table'
import { TableLoader } from '../components/loader'
import { useBalance } from '../hooks/useBalance'
import { Box, Text } from '@chakra-ui/layout'

export default function Home() {
  const {
    transactions,
    filter,
    onFilterChange,
    onQueryChange,
    isLoading,
    isError,
  } = useBalance({
    filter: 'all',
  })

  return (
    <>
      <Filter
        filter={filter}
        onTypeChange={onFilterChange}
        onQueryChange={onQueryChange}
      />

      {(transactions.length || isError) <= 0 ? (
        <Box py={6}>
          <Text
            textAlign="center"
            fontSize="lg"
            fontWeight="700"
            color="main.primary"
          >
            Nenhuma transação encontrada.
          </Text>
        </Box>
      ) : null}

      {isLoading ? <TableLoader /> : <Table data={transactions} />}
    </>
  )
}
