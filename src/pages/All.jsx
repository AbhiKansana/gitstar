import React, { useEffect, useState } from 'react'
import { Box, Button, Center, Flex, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import axios from 'axios' 
import Pager from '../comp/Pager'
import Card from '../comp/Card'



const All = () => {

    const[data,setData] = useState([])
    const[load,setLoad] = useState(false)
    const[page,setPage] = useState(1)

    useEffect(() => { 
        setLoad(true)
        axios.get(`https://api.github.com/search/repositories?q=stars:%3E1+language:all&page=${page}&per_page=10`)
        .then(res=>{
            // console.log(res.data.items[0])
            setLoad(false)
            setData(res.data.items)
        })
        .catch(err=>{
            console.log("error",err)
        })
    }, [page])


    const arr = data?.map(item=>{
        return (
            <Card key={item.id} info={item} />
        )
    })
    

  return (
    <>
      { load && <Center> <Spinner
       textAlign='center'
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
         /></Center>}
     <SimpleGrid minH={'80vh'} pt='20px' py='50px'  minChildWidth='250px' spacing='40px'>
        {arr}
    </SimpleGrid>
    <Flex m='auto' pb='40px' maxW={'300px'} justifyContent='space-between'>
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
    </>
  )
}

export default All