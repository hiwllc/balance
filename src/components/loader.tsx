import { Table, Thead, Tr, Th, Tbody, Td, Skeleton } from '@chakra-ui/react'

export function TableLoader() {
  return (
    <Table cellPadding="0" cellSpacing="0">
      <Thead>
        <Tr>
          <Th fontWeight="700" fontSize="xs" color="grays.500" colSpan={2}>
            <Skeleton w="150px" h="20px" />
          </Th>
          <Th>Tipo de transação</Th>
          <Th fontWeight="700" fontSize="xs" color="main.primary">
            Data
          </Th>
          <Th textAlign="end">
            saldo do dia <Skeleton display="inline-flex" w="60px" h="20px" />
          </Th>
        </Tr>
      </Thead>

      <Tbody>
        <Tr>
          <Td>
            <Skeleton w="32px" h="32px" rounded="full" />
          </Td>
          <Td color="grays.500">
            <Skeleton w="150px" h="20px" />
          </Td>
          <Td>
            <Skeleton w="150px" h="20px" />
          </Td>
          <Td>
            <Skeleton w="150px" h="20px" />
          </Td>
          <Td textAlign="end">
            <Skeleton w="100px" ml="auto" h="20px" />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  )
}
