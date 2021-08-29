import { useQuery } from 'react-query'
import { fetchBalance } from '../services/balance'
import { Transactions } from '../types'

function orderByNewest(transactions: Transactions['results'] = []) {
  // @ts-expect-error left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint'
  return transactions.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function useBalance() {
  const { data, isLoading, isError } = useQuery('GET_BALANCE', () =>
    fetchBalance()
  )

  return {
    data: { ...data, results: orderByNewest(data?.results) },
    isLoading,
    isError,
  }
}
