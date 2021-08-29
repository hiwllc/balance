import { useMemo, useState } from 'react'
import { DayTransactions, Filter, Transaction } from '../types'

type UseFilter = {
  initialState: DayTransactions[]
  filter: Filter
}

function removeEmptyTransactions(transactions: DayTransactions[]) {
  return transactions.filter(({ items }) => Boolean(items.length))
}

function getIncomeTransactions(transactions: Transaction[]) {
  return transactions.filter(transaction => {
    return transaction.entry === 'CREDIT'
  })
}

function getOutcomeTransactions(transactions: Transaction[]) {
  return transactions.filter(transaction => {
    return transaction.entry === 'DEBIT'
  })
}

function getFutureTransactions(transactions: Transaction[]) {
  return transactions.filter(transaction => Boolean(transaction.scheduled))
}

/**
 * should filter by query match.
 */
export function useFilter({ initialState, filter = 'all' }: UseFilter) {
  const [keyword, setKeyword] = useState(filter)

  const onFilterChange = (filter: Filter) => setKeyword(filter)

  const data = useMemo(() => {
    let results = initialState

    if (keyword === 'income') {
      const filtered = initialState.map(trx => ({
        ...trx,
        items: getIncomeTransactions(trx.items),
      }))

      results = removeEmptyTransactions(filtered)
    }

    if (keyword === 'outcome') {
      const filtered = initialState.map(trx => ({
        ...trx,
        items: getOutcomeTransactions(trx.items),
      }))

      results = removeEmptyTransactions(filtered)
    }

    if (keyword === 'future') {
      const filtered = initialState.map(trx => ({
        ...trx,
        items: getFutureTransactions(trx.items),
      }))

      results = removeEmptyTransactions(filtered)
    }

    return results
  }, [initialState, keyword])

  return {
    onFilterChange,
    data,
    filter: keyword,
  }
}
