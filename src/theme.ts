import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    main: {
      primary: '#FE3E6D',
      secondary: '#1A93DA',
    },

    fills: {
      blue: '#EAF7FF',
    },

    grays: {
      100: '#F0F4F8',
      200: '#DEE4E9',
      300: '#C7CBCF',
      400: '#6B7076',
      500: '#3B3B3B',
    },
  },

  components: {
    Button: {
      baseStyle: {
        fontWeight: 'normal',
        lineHeight: 6,
        px: 4,
        rounded: '3xl',
      },

      variants: {
        solid: {
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
        variant: 'solid',
      },
    },
  },
})
