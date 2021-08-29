import { ComponentMultiStyleConfig } from '@chakra-ui/react'

export const Input: ComponentMultiStyleConfig = {
  parts: ['field'],

  baseStyle: {
    field: {
      outline: 'none',
      color: 'main.primary',
      boxShadow: 'none',
    },
  },

  variants: {
    filled: () => ({
      field: {
        border: '2px solid',
        borderColor: 'transparent',
        borderRadius: '2xl',
        bg: 'grays.100',

        _hover: {
          bg: 'grays.100',
        },

        _focus: {
          bg: 'grays.200',
          borderColor: 'none',
          boxShadow: 'none',

          color: 'main.primary',
        },
      },
    }),
  },

  sizes: {
    md: {
      field: {
        h: 16,
      },
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'filled',
  },
}
