import { ComponentSingleStyleConfig } from '@chakra-ui/react'

export const Button: ComponentSingleStyleConfig = {
  baseStyle: {
    fontWeight: 'normal',
    lineHeight: 6,
    px: 4,
    rounded: '3xl',
  },

  variants: {
    active: {
      bg: 'main.primary',
      color: 'white',
      _hover: {
        bgColor: '#ffb1c5',
      },
    },

    ghost: {
      bg: 'transparent',
      color: 'main.primary',
      _hover: {
        bgColor: 'fills.blue',
      },
      _focus: {
        bgColor: 'fills.blue',
      },
    },
  },

  sizes: {
    md: {
      h: 8,
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'ghost',
  },
}
