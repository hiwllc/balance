import { Transactions } from '../types'

const BALANCE_URI = 'http://localhost:3000/api/balance'

async function request<T>(
  url: RequestInfo,
  opts: RequestInit = { method: 'GET' }
): Promise<T> {
  const response = await fetch(url, {
    ...opts,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json()
}

export async function fetchBalance() {
  return request<Transactions>(BALANCE_URI)
}
