import { render, screen, waitFor, fireEvent } from '@renderer'
import App from '../pages/index'

test('should render home page', async () => {
  render(<App />)
  await waitFor(() => {
    expect(screen.getByText(/5 de janeiro de 2021/i)).toBeInTheDocument()
  })
})

test('should filter and search transactions', async () => {
  render(<App />)
  const allButton = screen.getByText(/tudo/i)
  const incomeButton = screen.getByText(/entrada/i)
  const outcomeButton = screen.getByText(/saida/i)
  const futureButton = screen.getByText(/futuro/i)

  await waitFor(() => {
    expect(screen.getByText(/5 de janeiro de 2021/i)).toBeInTheDocument()
  })

  const debitTransfers = /transferência realizada/i
  const creditTransfers = /transferência estornada/i
  const creditPayment = /pagamento recebido/i
  const scheduledTransfer = /transferência agendada/i

  const [initialDebitTransfer] = screen.getAllByText(debitTransfers)
  const [initialCreditPayment] = screen.getAllByText(creditPayment)
  const [initialCreditTransfer] = screen.getAllByText(creditTransfers)
  const [initialScheduledTransfer] = screen.getAllByText(scheduledTransfer)

  fireEvent.click(incomeButton)
  expect(initialDebitTransfer).not.toBeInTheDocument()
  expect(initialScheduledTransfer).not.toBeInTheDocument()
  expect(screen.getAllByText(creditPayment)[0]).toBeInTheDocument()
  expect(screen.getAllByText(creditTransfers)[0]).toBeInTheDocument()

  fireEvent.click(outcomeButton)
  expect(initialCreditPayment).not.toBeInTheDocument()
  expect(initialCreditTransfer).not.toBeInTheDocument()
  expect(screen.getAllByText(debitTransfers)[0]).toBeInTheDocument()
  expect(screen.getAllByText(scheduledTransfer)[0]).toBeInTheDocument()

  fireEvent.click(futureButton)
  expect(initialDebitTransfer).not.toBeInTheDocument()
  expect(initialCreditPayment).not.toBeInTheDocument()
  expect(initialCreditTransfer).not.toBeInTheDocument()
  expect(screen.getAllByText(scheduledTransfer)[0]).toBeInTheDocument()

  fireEvent.click(allButton)

  fireEvent.change(screen.getByPlaceholderText(/pesquisar/i), {
    target: { value: 'jhon doe' },
  })

  expect(screen.getByText(/nenhuma transação encontrada/i)).toBeInTheDocument()

  fireEvent.change(screen.getByPlaceholderText(/pesquisar/i), {
    target: { value: 'alexandre' },
  })

  expect(screen.getByText(/alexandre da silva/i)).toBeInTheDocument()
})
