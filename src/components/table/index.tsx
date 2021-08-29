import { Fragment } from 'react'
import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Grid,
} from '@chakra-ui/react'
import { formatCurrency, formatDate } from '../../formaters'
import { DayTransactions } from '../../types'
import {
  getColorValue,
  getSymbol,
  getTransactionIcon,
  getTransactionType,
  isRefund,
} from './utils'

type Props = {
  data: DayTransactions[]
}

export function Table({ data }: Props) {
  return (
    <ChakraTable cellPadding="0" cellSpacing="0">
      {data.map((transactions, index) => (
        <Fragment key={transactions.date}>
          <Thead>
            <Tr>
              <Th
                fontWeight="700"
                fontSize="xs"
                color="grays.500"
                colSpan={index === 0 ? 2 : 4}
              >
                {formatDate(transactions.date, { dateStyle: 'long' })}
              </Th>
              {index === 0 ? (
                <>
                  <Th>Tipo de transação</Th>

                  <Th fontWeight="700" fontSize="xs" color="main.primary">
                    Data
                  </Th>
                </>
              ) : null}
              <Th textAlign="end">
                saldo do dia{' '}
                <Text as="strong">
                  R$ {formatCurrency(transactions.amountTotal)}
                </Text>
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            {transactions.items.map(transaction => {
              const type = getTransactionType(transaction)

              const textDecoration = isRefund(type) ? 'line-through' : 'initial'

              return (
                <Tr
                  key={`${transaction.dateEvent}${transaction.actor}${transaction.amount}`}
                >
                  <Td>
                    <Grid
                      w="32px"
                      h="32px"
                      as="span"
                      rounded="full"
                      bgColor="fills.blue"
                      placeItems="center"
                    >
                      {getTransactionIcon(type)}
                    </Grid>
                  </Td>
                  <Td color="grays.500">{transaction.actor}</Td>
                  <Td>{getTransactionType(transaction)}</Td>
                  <Td>
                    {formatDate(transaction.dateEvent, {
                      dateStyle: 'medium',
                      timeStyle: 'short',
                    })}
                  </Td>
                  <Td
                    color={getColorValue(type)}
                    textDecoration={textDecoration}
                    textAlign="end"
                  >
                    {getSymbol(type)}{' '}
                    <Text as="strong" fontWeight="700">
                      {formatCurrency(transaction.amount)}
                    </Text>
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
        </Fragment>
      ))}
    </ChakraTable>
  )
}
