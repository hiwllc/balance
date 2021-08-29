import { Table } from '../components/table'
import { useBalance } from '../hooks/useBalance'

export default function Home() {
  const { data } = useBalance()

  return <Table data={data.results} />
}
