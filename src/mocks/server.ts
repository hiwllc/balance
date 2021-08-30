import { setupServer } from 'msw/node'
import { handlers } from './balance'

export const server = setupServer(...handlers)
