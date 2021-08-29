import { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { fetchBalance } from '../services/balance'
import { DayTransactions, Transaction, Filter } from '../types'

type UseFilter = {
  filter: Filter
}

function orderByNewest(transactions: DayTransactions[] = []) {
  // @ts-expect-error left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint'
  return transactions.sort((a, b) => new Date(b.date) - new Date(a.date))
}

function removeEmptyTransactions(transactions: DayTransactions[]) {
  return transactions.filter(({ items }) => Boolean(items.length))
}

function getIncomeTransactions(transactions: Transaction[]) {
  return transactions.filter(transaction => transaction.entry === 'CREDIT')
}

function getOutcomeTransactions(transactions: Transaction[]) {
  return transactions.filter(transaction => transaction.entry === 'DEBIT')
}

function getFutureTransactions(transactions: Transaction[]) {
  return transactions.filter(transaction => Boolean(transaction.scheduled))
}

export function useBalance({ filter }: UseFilter) {
  const { data, isLoading, isError } = useQuery('GET_BALANCE', () =>
    fetchBalance()
  )
  const [keyword, setKeyword] = useState(filter)

  const onFilterChange = (filter: Filter) => setKeyword(filter)

  const ordered = useMemo(() => orderByNewest(data?.results), [data])

  const transactionFiltered = useMemo(() => {
    if (keyword === 'income') {
      const filtered = ordered.map(trx => ({
        ...trx,
        items: getIncomeTransactions(trx.items),
      }))

      return removeEmptyTransactions(filtered)
    }

    if (keyword === 'outcome') {
      const filtered = ordered.map(trx => ({
        ...trx,
        items: getOutcomeTransactions(trx.items),
      }))

      return removeEmptyTransactions(filtered)
    }

    if (keyword === 'future') {
      const filtered = ordered.map(trx => ({
        ...trx,
        items: getFutureTransactions(trx.items),
      }))

      return removeEmptyTransactions(filtered)
    }

    return ordered
  }, [ordered, keyword])

  const results = useMemo(() => transactionFiltered, [transactionFiltered])

  return {
    onFilterChange,
    transactions: results,
    isLoading,
    isError,
    filter: keyword,
  }
}
