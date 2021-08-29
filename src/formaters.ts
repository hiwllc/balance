export function formatDate(
  dateOrString: Date | string,
  options?: Intl.DateTimeFormatOptions
) {
  const date = new Date(dateOrString)
  return new Intl.DateTimeFormat('pt-BR', options).format(date)
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(value / 100)
    .replace('R$', '')
}
