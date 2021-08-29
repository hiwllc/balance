import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Table: ComponentMultiStyleConfig = {
  parts: ['th', 'tbody', 'td', 'tr'],

  variants: {
    simple: {
      th: {
        px: 0,
        py: 6,
        borderBottom: 'none',
        fontSize: 'xs',
        fontWeight: 'normal',
        textTransform: 'initial',
        color: 'grays.400',

        _first: { pl: 4 },
        _last: { pr: 4 },
      },

      tbody: {
        my: 2,
        rounded: '2xl',
        boxShadow: '0 0 0 1px #C7CBCF',
        border: 'none',
        borderColor: 'gray.100',
      },

      td: {
        px: 0,
        border: 'none',

        fontSize: 'md',
        color: 'grays.400',

        _first: { pl: 4 },
        _last: { pr: 4 },
      },

      tr: {
        _first: {
          '& td': {
            pt: 7,
          },
        },

        _last: {
          '& td': {
            pb: 7,
          },
        },
      },
    },
  },

  defaultProps: {
    variant: 'simple',
  },
}
