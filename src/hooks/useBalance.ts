import { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { fetchBalance } from '../services/balance'
import { DayTransactions, Transaction, Filter } from '../types'

type UseFilter = {
  filter: Filter
  query?: string
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

function searchTransactions(transactions: Transaction[], query: string) {
  return transactions.filter(transaction =>
    transaction.actor.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  )
}

export function useBalance({ filter, query }: UseFilter) {
  const { data, isLoading, isError } = useQuery('GET_BALANCE', () =>
    fetchBalance()
  )
  const [keyword, setKeyword] = useState(filter)
  const [term, setTerm] = useState(query)

  const onFilterChange = (filter: Filter) => setKeyword(filter)
  const onQueryChange = (query: string) => setTerm(query)

  const ordered = useMemo(() => orderByNewest(data?.results), [data])

  const transactions = useMemo(() => {
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

  const results = useMemo(() => {
    if (term) {
      const filtered = transactions.map(trx => ({
        ...trx,
        items: searchTransactions(trx.items, term),
      }))

      return removeEmptyTransactions(filtered)
    }

    return transactions
  }, [term, transactions])

  return {
    onFilterChange,
    onQueryChange,
    transactions: results,
    isLoading,
    isError,
    filter: keyword,
  }
}
