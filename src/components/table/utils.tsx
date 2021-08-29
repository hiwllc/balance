import { Transaction, TransactionsTypes } from '../../types'
import { ReactComponent as IncomeIcon } from '../../icons/income.svg'
import { ReactComponent as OucomeIcon } from '../../icons/outcome.svg'
import { ReactComponent as ScheduleIcon } from '../../icons/schedule.svg'

export function getCompletedTransactionType({
  source,
  entry,
}: Pick<Transaction, 'source' | 'entry'>) {
  switch (true) {
    case source === 'PAYMENT' && entry === 'DEBIT':
      return TransactionsTypes.PAGAMENTO_REALIZADO
    case source === 'TRANSFER' && entry === 'DEBIT':
      return TransactionsTypes.TRANSFERENCIA_REALIZADA
    case source === 'PAYMENT' && entry === 'CREDIT':
      return TransactionsTypes.PAGAMENTO_RECEBIDO
    case source === 'TRANSFER' && entry === 'CREDIT':
      return TransactionsTypes.TRANSFERENCIA_RECEBIDA
  }
}

export function getRefundedTransactionType({
  source,
  entry,
}: Pick<Transaction, 'source' | 'entry'>) {
  switch (true) {
    case source === 'PAYMENT' && entry === 'CREDIT':
      return TransactionsTypes.PAGAMENTO_ESTORNADO
    case source === 'TRANSFER' && entry === 'CREDIT':
      return TransactionsTypes.TRANSFERENCIA_ESTORNADA
  }
}

export function getPendingTransactionType({
  source,
  entry,
}: Pick<Transaction, 'source' | 'entry'>) {
  switch (true) {
    case source === 'PAYMENT' && entry === 'DEBIT':
      return TransactionsTypes.PAGAMENTO_AGENDADO
    case source === 'TRANSFER' && entry === 'DEBIT':
      return TransactionsTypes.TRANSFERENCIA_AGENDADA
  }
}

export function getTransactionIcon(type: TransactionsTypes | undefined) {
  switch (type) {
    case TransactionsTypes.PAGAMENTO_AGENDADO:
      return <ScheduleIcon />
    case TransactionsTypes.TRANSFERENCIA_AGENDADA:
      return <ScheduleIcon />
    case TransactionsTypes.TRANSFERENCIA_REALIZADA:
      return <ScheduleIcon />
    case TransactionsTypes.PAGAMENTO_ESTORNADO:
      return <OucomeIcon />
    case TransactionsTypes.TRANSFERENCIA_ESTORNADA:
      return <OucomeIcon />
    case TransactionsTypes.PAGAMENTO_RECEBIDO:
      return <IncomeIcon />
    case TransactionsTypes.TRANSFERENCIA_RECEBIDA:
      return <IncomeIcon />
  }
}

export function getTransactionType({
  status,
  source,
  entry,
}: Transaction): TransactionsTypes | undefined {
  switch (status) {
    case 'COMPLETED':
      return getCompletedTransactionType({ source, entry })
    case 'REFUNDED':
      return getRefundedTransactionType({ source, entry })
    case 'PENDING':
      return getPendingTransactionType({ source, entry })
  }
}

export const isRefund = (type: TransactionsTypes | undefined) =>
  type === TransactionsTypes.PAGAMENTO_ESTORNADO ||
  type === TransactionsTypes.TRANSFERENCIA_ESTORNADA

export const isOutcome = (type: TransactionsTypes | undefined) =>
  type === TransactionsTypes.PAGAMENTO_AGENDADO ||
  type === TransactionsTypes.PAGAMENTO_REALIZADO ||
  type === TransactionsTypes.TRANSFERENCIA_AGENDADA ||
  type === TransactionsTypes.TRANSFERENCIA_REALIZADA

export function getColorValue(type: TransactionsTypes | undefined) {
  if (isOutcome(type)) {
    return 'main.primary'
  }

  if (isRefund(type)) {
    return 'grays.500'
  }

  return 'main.secondary'
}

export function getSymbol(type: TransactionsTypes | undefined) {
  return isOutcome(type) ? '- R$' : isRefund(type) ? 'R$' : '+ R$'
}
