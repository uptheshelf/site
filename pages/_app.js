import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      50: '#fff7db',
      100: '#ffe3b0',
      200: '#fccd81',
      300: '#fab252',
      400: '#f79621',
      500: '#de8b08',
      600: '#FBB040',
      700: '#7c5d01',
      800: '#4c3d00',
      900: '#1e1600',
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
