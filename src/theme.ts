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
    },

    Input: {
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
    },

    Table: {
      variants: {
        simple: {
          th: {
            px: 0,
            py: 6,
            borderBottom: 'none',
            fontSize: 'sm',
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
    },
  },
})
