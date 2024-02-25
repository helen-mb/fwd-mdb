// 1. Import `extendTheme`
import { withDefaultColorScheme, extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme(
  {
    colors: {
      brand: {
        50: '#EBF9FD',
        100: '#97DAF3',
        200: '#55C4EC',
        300: '#4091E7',
        400: '#1962B6',
        500: '#2449A8',
        600: '#1D3C8B',
        700: '#192B55',
        800: '#091532',
        900: '#010103',
      },
    },

    fonts: {
      assistant: {
        extraLight: 'Assistant ExtraLight',
        light: 'Assistant Light',
        normal: 'Assistant',
        semiBold: 'Assistant SemiBold',
        bold: 'Assistant Bold',
        extraBold: 'Assistant ExtraBold',
      },
    },

    breakpoints: {
      base: '0em',
      sm: '30em',
      md: '48em',
      lg: '62em',
      xl: '80em',
      '2xl': '96em',
    },
  },
  withDefaultColorScheme({ colorScheme: 'brand' })
);

/* <ChakraProvider theme={theme}>
  <App />
</ChakraProvider> */
export default theme;
