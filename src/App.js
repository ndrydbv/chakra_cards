// Chakra imports

import { Box, Button, Flex, useColorMode } from '@chakra-ui/react'
import React from 'react'

//Assets
import Background from './assets/background.png'

// Component Import
import Product from './components/Product'
import Profile from './components/Profile'
import Teams from './components/Teams'
function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
      h='100vh'
      w='100%'
    >
      <Flex
        flexDirection='column'
        maxW='90%'
        px='10px'
        my='30px'
        mx='auto'
        bgImage={Background}
        bgSize='cover'
        py='50px'
        borderRadius='20px'
      >
        <Button
          colorScheme='purple'
          onClick={toggleColorMode}
          mx='auto'
          color='white'
          mb='50px'
        >
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>

        <Flex
          direction={{ base: 'column', xl: 'row' }}
          mx='auto'
          rowGap='20px'
          columnGap='20px'
        >
          <Profile />
          <Teams />
          <Product />
        </Flex>
      </Flex>
    </Box>
  )
}

export default App
