export type Status = 'COMPLETED' | 'REFUNDED' | 'PENDING'
export type Source = 'TRANSFER' | 'PAYMENT'
export type Type = 'BANKSLIP' | 'EXTERNAL' | 'INTERNAL'
export type Entry = 'DEBIT' | 'CREDIT'

export type Transaction = {
  status: Status
  actor: string
  amount: number
  source: Source
  type: Type
  entry: Entry
  dateEvent: string
  scheduled: boolean
}

export type DayTransactions = {
  date: string
  amountTotal: number
  items: Transaction[]
}

export type Transactions = {
  itemsTotal: number
  results: DayTransactions[]
}
