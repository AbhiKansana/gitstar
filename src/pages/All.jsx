import React, { useState } from 'react'
import Common from '../comp/Commons'
import Pager from '../comp/Pager'
import {Flex, Button, Text} from '@chakra-ui/react'

const All = () => {
    const[page,setPage] = useState(1)
    // console.log({page})
  return (
    <div>
        <Common bhasa="all" page={page}/>
        <Flex m='auto' pb='40px' maxW={'250px'} justifyContent='space-between'>
        <Button onClick={()=>{
            if(page>1){
                setPage(page-1)
            }
        }} colorScheme='blue'>Prev</Button>
        <Text fontSize='1.25rem'>{page}</Text>
        <Button onClick={()=>{
             setPage(page+1)
        }} colorScheme='blue'>Next</Button>
    </Flex>
    </div>
  )
}

export default All