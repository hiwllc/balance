import { Filter } from '../components/filter'
import { Table } from '../components/table'
import { useBalance } from '../hooks/useBalance'
import { useFilter } from '../hooks/useFilter'

export default function Home() {
  const { data } = useBalance()
  const {
    data: transactions,
    onFilterChange,
    filter,
  } = useFilter({
    initialState: data.results,
    filter: 'all',
  })

  return (
    <>
      <Filter filter={filter} onTypeChange={onFilterChange} />
      <Table data={transactions} />
    </>
  )
}
