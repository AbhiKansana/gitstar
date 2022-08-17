import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Pager = () => {
  return (
    <Box>

        <Flex m='auto' pb='40px' maxW={'300px'} justifyContent='space-between'>
        <Button colorScheme='blue'>Prev</Button>
        <Text fontSize='1.25rem'>1</Text>
        <Button colorScheme='blue'>Next</Button>
        </Flex>

    </Box>
  )
}

export default Pager

 