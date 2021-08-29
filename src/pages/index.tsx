import { Filter } from '../components/filter'
import { Table } from '../components/table'
import { useBalance } from '../hooks/useBalance'

export default function Home() {
  const { transactions, filter, onFilterChange } = useBalance({
    filter: 'all',
  })

  return (
    <>
      <Filter filter={filter} onTypeChange={onFilterChange} />
      <Table data={transactions} />
    </>
  )
}
