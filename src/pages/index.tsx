import { Filter } from '../components/filter'
import { Table } from '../components/table'
import { TableLoader } from '../components/loader'
import { useBalance } from '../hooks/useBalance'

export default function Home() {
  const { transactions, filter, onFilterChange, onQueryChange, isLoading } =
    useBalance({
      filter: 'all',
    })

  return (
    <>
      <Filter
        filter={filter}
        onTypeChange={onFilterChange}
        onQueryChange={onQueryChange}
      />

      {isLoading ? <TableLoader /> : <Table data={transactions} />}
    </>
  )
}
